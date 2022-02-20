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
        v-model="account"
      )
    .password-input-wrapper
      img.input-icon(:src="require('@/assets/password-icon.svg')" alt="")
      input.password-input(
        @keyup.enter="loginHandler"
        type="password"
        placeholder="Password"
        autocomplete="on"
        v-model="password"
        name="password"
      )
  .sign-in-btn(
    @click="loginHandler"
  ) Sign in
  </template>

<script>
import loginAuth from '@/services/authServices'

export default {
  name: 'LoginForm',

  data () {
    return {
      account: '',
      password: ''
    }
  },

  methods: {
    loginHandler () {
      const { account, password } = this

      loginAuth({ body: { account, password } })
        .then(_ => {
          this.$router.push({ name: 'manage' })
        })
    }
  }
}
</script>

<style scoped>
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
