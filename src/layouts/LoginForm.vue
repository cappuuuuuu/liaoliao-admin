<template lang="pug">
.login-form
  .greeting-msg Login
  .login-hint-msg You need to provide an access details below to enter the manage system
  .login-input-container
    .account-input-wrapper
      img.input-icon(:src="require('@/assets/account-icon.svg')" alt="")
      input.account-input(
        name="account"
        placeholder="Username"
        v-model="personalInfo.account"
      )
    .password-input-wrapper
      img.input-icon(:src="require('@/assets/password-icon.svg')" alt="")
      input.password-input(
        @keyup.enter="loginHandler"
        type="password"
        placeholder="Password"
        autocomplete="on"
        v-model="personalInfo.password"
        name="password"
      )
  vs-button.sign-in-btn(
    @click="$emit('login-handler', personalInfo)"
    :color="themeColor.primary"
    flat
   ) Sign In
  </template>

<script>
import { mapState } from 'pinia'
import { useTailwindStyleStore } from '@/stores/tailwind'

export default {
  name: 'LoginForm',
  data () {
    return {
      personalInfo: {
        account: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState(useTailwindStyleStore, ['themeColor'])
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  @apply flex flex-col justify-center w-full xl:w-1/2 h-full px-[8%] bg-white rounded-[20px] xl:rounded-r-none;
}

.greeting-msg {
  @apply mb-[6px] font-bold text-[66px] text-dark-primary;
}

.login-hint-msg {
  @apply mb-[66px] text-gray-500 tracking-tight;
}

.login-input-container {
  @apply mb-[36px];
}

.account-input,
.password-input {
  @apply w-full py-[14px] outline-none text-gray-500 bg-transparent;

  &:-webkit-autofill {
    transition: .15s ease;
    -webkit-box-shadow: 0 0 0px 1000px rgb(246,246,246) inset;
  }

  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0px 1000px rgb(236, 237, 240) inset;
  }
}

.account-input-wrapper,
.password-input-wrapper {
  @apply flex items-center w-full px-[24px] rounded-[10px] bg-input transition focus-within:bg-focus-input;
}

.account-input-wrapper {
  @apply mb-[22px];
}

.input-icon {
  @apply h-[20px] mr-[16px];
}

.sign-in-btn {
  @apply text-white h-[46px] flex items-center justify-center rounded-lg shadow-lg
  cursor-pointer bg-primary hover:bg-dark-primary transition;
}

</style>
