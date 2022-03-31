<template lang="pug">
.hambergur-button-wrapper
  .hambergur-line.top
  .hambergur-line.center
  .hambergur-line.bottom
</template>

<script>
export default {
  name: 'HamburgerButton'
}
</script>

<style lang="scss" scoped>
.hambergur-line {
  @apply absolute h-[2px] rounded-[4px] bg-main-color dark:bg-dark-main-color transition-all left-1/2 -translate-x-1/2;

  &.top,
  &.bottom {
    @apply w-[12px];
  }

  &.top {
    @apply top-0;
  }

  &.center {
    @apply w-[26px] top-1/2 -translate-y-1/2;
  }

  &.bottom {
    @apply bottom-0;
  }
}

.hambergur-button-wrapper {
  @apply relative min-w-[25px] h-[16px] cursor-pointer;

  &:hover {
    .hambergur-line {
      &.top,
      &.bottom {
        @apply w-[26px];
      }

      &.center {
        @apply w-[16px];
      }
    }
  }
}

</style>
