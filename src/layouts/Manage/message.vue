<template lang="pug">
.message-manage(v-if="messageList.length")
  .message-manage-title Messages
  .center
    vs-table
      template(#thead)
        vs-tr
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
          @click="openDialog({ type: 'MessageDetail', info: message })"
        )
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
      :length="Math.ceil(messageTotalCount / pagination.count)"
      not-arrows
    )
</template>

<script>
import { mapActions } from 'pinia'
import { useDialogStore } from '@/stores/dialog'
import { getMessage } from '@/services/messageServices'

export default {
  name: 'MessageManage',
  data () {
    return {
      messageTotalCount: 0,
      messageList: [],
      pagination: {
        page: 1,
        count: 10
      }
    }
  },
  async created () {
    await this.getMessageAction()
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
      const { data: { records, count } } = await getMessage(this.pagination)
      this.messageList = records
      this.messageTotalCount = count
    }
  }
}
</script>

<style lang="scss" scoped>
.message-manage-title {
  @apply
    mb-[26px]
    text-[24px]
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
