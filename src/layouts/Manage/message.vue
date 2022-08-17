<template lang="pug">
.message-manage(v-if="messageList.length")
  .message-manage-title Messages
    vs-button.delete-btn(icon @click="clickDeleteButton")
      i.bx.bx-trash
  .center
    vs-table
      template(#thead)
        vs-tr
          vs-th
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

export default {
  name: 'MessageManage',
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
      }
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

      const { data: { records, count } } = await getMessage(this.pagination)
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
    mb-[15px]
    text-[18px]
    leading-[32px]
    font-bold
    text-main-color
    dark:text-dark-main-color;
}

.delete-btn {
  @apply
    w-[40px]
    h-[40px]
    bg-link-color-active-bg
    dark:bg-dark-link-color-hover
    shadow-none;

  .bx {
    @apply
      text-[24px]
  }
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
