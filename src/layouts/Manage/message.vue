<template lang="pug">
.message-manage
  .message-manage-title Messages
    vs-button(icon @click="clickDeleteButton")
      i.bx.bx-trash
  SearchGroup.search-block(:data="searchData" @search="searchMessage")
  .center
    vs-table
      template(#thead)
        vs-tr
          vs-th(v-if="messageList.length")
            vs-checkbox(
              color="danger"
              v-model="checkBoxOption.isAllCheck"
              @change="checkBoxOption.selected = $vs.checkAll(checkBoxOption.selected, messageList)"
              :indeterminate="checkBoxOption.selected.length === messageList.length"
            )
          vs-th Name
          vs-th Type
          vs-th Content
          vs-th Time
      template(#tbody)
        .divide-line
        vs-tr(
          v-for="(message, index) in messageList"
          :key="index"
          :data="message"
          @click="clickRowAction(message, $event)"
        )
          vs-td(checkbox)
            vs-checkbox(color="danger" :val="message" v-model="checkBoxOption.selected")
          vs-td {{ message.name }}
          vs-td
            img.message-type-icon(:src="require(`@/assets/${message.type === 'text' ? 'message' : 'sticker'}.svg`)")
          vs-td(v-if="message.type === 'text'")
            | {{ message.content.length >= 30 ? `${ message.content.slice(0, 30) } ...` : message.content }}
          vs-td(v-else)
            .sticker-img-wrapper
              img.sticker-img(:src="message.content")
          vs-td {{ message.time | dateFormat }}
    vs-pagination(
      color="dark"
      v-model="pagination.page"
      :length="paginationInfo.total"
      not-arrows
    )
</template>

<script>
import { notify } from '@/library/vuesax'
import { mapState, mapActions } from 'pinia'
import { useDialogStore } from '@/stores/dialog'
import { useTailwindStyleStore } from '@/stores/tailwind'
import { getMessage, deleteMessage } from '@/services/messageServices'
import MESSAGE from '@/constants/message'
import SearchGroup from '@/components/SearchGroup'

export default {
  name: 'MessageManage',
  components: {
    SearchGroup
  },
  data () {
    return {
      messageTotalCount: 0,
      messageList: [],
      checkBoxOption: {
        isAllCheck: false,
        selected: []
      },
      pagination: {
        page: 1,
        count: 10
      },
      searchData: [
        {
          name: 'name',
          label: 'Name',
          placeholder: 'Name',
          inputType: 'text',
          value: ''
        },
        {
          name: 'type',
          label: 'Message Type',
          placeholder: 'All',
          inputType: 'select',
          value: '',
          options: ['text', 'sticker']
        },
        {
          name: 'startDate',
          label: 'Date Start',
          inputType: 'date',
          value: ''
        },
        {
          name: 'endDate',
          label: 'Date End',
          inputType: 'date',
          value: ''
        }
      ]
    }
  },
  async created () {
    await this.getMessageAction()
  },
  computed: {
    ...mapState(useTailwindStyleStore, ['themeColor']),
    paginationInfo () {
      const total = Math.ceil(this.messageTotalCount / this.pagination.count)

      return {
        total,
        isTheLast: this.pagination.page === total
      }
    }
  },
  watch: {
    pagination: {
      handler () {
        this.getMessageAction()
      },
      deep: true
    }
  },
  methods: {
    ...mapActions(useDialogStore, ['openDialog']),
    async getMessageAction () {
      this.resetSelectedMessage()

      const { data: { records, count } } = await getMessage({ body: this.pagination })
      this.messageList = records
      this.messageTotalCount = count
    },
    clickRowAction (message, e) {
      if (e.target.type === 'checkbox') return

      this.openDialog({
        type: 'MessageDetail',
        info: message
      })
    },
    resetSelectedMessage () {
      this.checkBoxOption.isAllCheck = false
      this.checkBoxOption.selected = []
    },
    handleDeleteTheLastPageAllMessage () {
      const isDeleteCurrentPageAllMessage = this.checkBoxOption.selected.length === this.messageList.length

      if (isDeleteCurrentPageAllMessage && this.pagination.page > 1) {
        this.pagination.page -= 1
      }
    },
    async deleteMessageProcedure () {
      const ids = this.checkBoxOption.selected.map(item => item._id)
      await deleteMessage({ body: { ids } })

      notify({
        text: MESSAGE.notification.success.DELETE_MESSAGE,
        color: 'success'
      })

      if (this.paginationInfo.isTheLast) this.handleDeleteTheLastPageAllMessage()

      // After delete message success, get the newest messages.
      await this.getMessageAction()
    },
    clickDeleteButton () {
      this.openDialog({
        type: 'DeleteMessage',
        info: this.checkBoxOption.selected,
        confirmFunc: this.deleteMessageProcedure
      })
    },
    handleFormValue ({ value, inputType }) {
      if (!value) return null
      return inputType === 'date' ? new Date(value).toISOString() : value
    },
    async searchMessage (formList) {
      this.resetSelectedMessage()

      const queries = formList
        .map(node => {
          return {
            ...node,
            value: this.handleFormValue(node)
          }
        })
        .reduce((acc, cur) => {
          acc[cur.name] = cur.value
          return acc
        }, {})

      const body = {
        ...this.pagination,
        ...queries
      }
      const { data: { records, count } } = await getMessage({ body })
      console.log('records', records)
      console.log('count', count)
      this.messageList = records
      this.messageTotalCount = count
    }
  }
}
</script>

<style lang="scss" scoped>
.message-manage-title {
  @apply
    flex
    justify-between
    items-center
    mb-[45px]
    text-[18px]
    leading-[32px]
    font-bold
    text-main-color
    dark:text-dark-main-color;
}

.vs-table-content {
  height: calc(100vh - 290px);
}

.divide-line {
  @apply
    h-[10px];
}

.message-type-icon {
  width: 20px;

  .dark & {
    filter: invert(1);
  }
}

.avatar-img,
.sticker-img {
  @apply
    h-full
    object-contain
}

.sticker-img-wrapper {
  @apply
    h-[60px]
    w-[60px];

  .sticker-img {
    @apply
      h-full
      object-contain;
}
}

.vs-pagination-content {
  @apply
    absolute
    bottom-[26px]
    left-0
    right-0
    mx-auto;
}

.search-block {
  @apply
    mb-[35px];
}
</style>
<style lang="scss">
.message-manage {
  .vs-table {
    @apply
      h-full
      pr-[16px]
      overflow-y-auto;

    &::-webkit-scrollbar {
      @apply
        w-2
        rounded-md
        bg-scrollbar;
    }

    &::-webkit-scrollbar-thumb {
      @apply
        rounded-md
        bg-scrollbar-thumb;
    }
  }

  .vs-table__td:first-child {
    @apply
      pl-[15px];
  }

  .vs-table__tr {
    @apply
      cursor-pointer;
  }
}
</style>
