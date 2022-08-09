<template lang="pug">
DialogLayout
  template(#header)
    | Message Details
  template(#content)
    .avatar-wrapper
      .avatar-img-wrapper
        img.avatar-img(:src="require(`@/assets/images/avatar/avatar-${message.avatar}.png`)" alt="")
      .avatar-name {{ message.name }}
    .message-wrapper
      span(v-if="message.type === 'text'") {{ message.content }}
      img.sticker-img(v-else :src="message.content")
  template(#footer)
    .message-time {{ message.time | dateFormat }}
</template>

<script>
import { mapState } from 'pinia'
import { useDialogStore } from '@/stores/dialog'
import DialogLayout from '@/components/Dialog/layout'

export default {
  name: 'MessageDetail',
  components: {
    DialogLayout
  },
  computed: {
    ...mapState(useDialogStore, { message: 'info' })
  }
}
</script>

<style lang="scss" scoped>
.avatar-wrapper {
  @apply
    flex flex-col
    items-center
    mr-[35px]
    text-main-color
    dark:text-dark-main-color;
}

.avatar-img-wrapper {
  @apply
    flex
    items-center
    justify-center
    w-[65px]
    h-[65px]
    mb-[6px]
    p-[5px]
    rounded-xl
    bg-avatar-wrapper
    dark:bg-white;
}

.avatar-img {
  @apply
    w-full
    object-contain;
}

.vs-avatar-content {
  @apply
    mb-[6px];
}

.content-wrapper {
  .time {
    @apply
      ml-4
      text-main-color
      dark:text-dark-main-color;
  }
}

.message-wrapper {
  @apply
    relative
    py-[24px]
    px-[36px]
    rounded-xl
    text-main-color
    dark:text-dark-main-color
    bg-message-wrapper
    dark:bg-avatar-wrapper;

  &::before {
    @apply
      content-['']
      absolute
      top-1/2
      left-[-15px]
      w-[0px]
      h-[0px]
      border-t-[15px]
      border-t-app-container
      dark:border-t-avatar-wrapper
      border-l-[15px]
      border-l-transparent;
  }
}

.sticker-img {
  @apply
    h-[100px]
    mx-auto;
}

.message-time {
  @apply
    text-main-color
    dark:text-dark-main-color
    text-right
    mr-[10px];
}
</style>
