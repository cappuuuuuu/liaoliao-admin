<template lang="pug">
  .dropdown-menu
    button.dropdown-menu-btn(
      @click="isOpen = true"
      :class="{ active: isOpen }"
    )
      template(v-if="$slots.header")
        slot(name="header")
      template(v-else)
        .default-header-name {{ defaultHeaderName }}
      img.arrow-icon(:src="require(`@/assets/arrow-down-light.svg`)")
    .fix-mask(
      v-if="isOpen"
      @click="isOpen = false"
      tabindex="-1"
    )
    transition(
      enter-class="opacity-0 transform scale-90 transition-all"
      enter-active-class="transition ease-out duration-75"
      enter-to-class="opacity-100 transform scale-100"
      leave-class="opacity-100 transform scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-to-class="opacity-0 transform scale-90"
    )
      .dropdown-content(v-if="isOpen")
        slot(name="content")
</template>
<script>

export default {
  name: 'Dropdown',
  data () {
    return {
      isOpen: false,
      defaultHeaderName: 'Default'
    }
  }
}
</script>
<style lang="scss" scoped>
.dropdown-menu {
  @apply max-w-xs mx-auto text-right relative inline-block;
}

.arrow-icon {
  @apply w-[12px] ml-[12px] transition;
}

.dropdown-menu-btn {
  @apply
    inline-flex items-center
    pl-6 pr-5 py-2
    font-semibold text-white hover:text-white
    rounded-lg
    bg-button-bg dark:bg-dark-button-bg
    transition
    duration-300;

  &.active {
    .arrow-icon {
      @apply -rotate-180;
    }
  }
}

.dropdown-content {
  @apply
    absolute right-0 z-[75]
    overflow-hidden
    w-52
    mt-3
    text-left
    transform origin-top-right
    rounded-lg
    shadow-lg
    bg-projects-section
    dark:bg-dark-projects-section;
}

.fix-mask {
  @apply fixed inset-0;
}
</style>
