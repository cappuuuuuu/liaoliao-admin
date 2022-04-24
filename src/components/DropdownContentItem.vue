<template lang="pug">
  .dropdown-item-wrap
    .dropdown-content-item
      slot
    .divide-line
</template>
<script>

export default {
  name: 'DropdownContentItem'
}
</script>
<style lang="scss" scoped>
.dropdown-content-item {
  @apply
    flex items-center
    block
    w-full
    px-6
    py-3
    text-left font-bold
    text-[16px]
    leading-tight
    cursor-pointer
    text-main-color
    hover:bg-message-box-hover
    dark:text-dark-main-color
    dark:hover:bg-dark-link-color-hover;
}

.divide-line {
  @apply
    w-[85%]
    mx-auto
    h-[2px]
    bg-more-list-shadow
    dark:bg-dark-more-list-shadow;
}

.dropdown-item-wrap:last-child {
  .divide-line {
    display: none;
  }
}
</style>
