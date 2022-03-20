<template lang="pug">
.login-page
  .login-box-container
    LoginForm(@login-handler="loginHandler")
    .login-bg-wrapper
      .login-bg-image
      .product-exhibit
        img.product-icon(:src="require('@/assets/logo-icon.svg')")
        .product-name LIAO LIAO
      .login-bg-description Because every second matters
</template>

<script>
import { loginAuth } from '@/services/authServices'
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  methods: {
    loginHandler (personalInfo) {
      const { account, password } = personalInfo
      const body = {
        account,
        password
      }

      loginAuth({ body })
        .then(() => this.$router.push({ name: 'manage' }))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
.login-page {
  @apply w-screen h-screen flex justify-center items-center;

  background-color: rgb(246,243,253);
}

.login-box-container {
  @apply flex w-[65%] h-[80%] max-w-[1500px] rounded-[20px] shadow-2xl;
}

.login-bg-wrapper {
  @apply hidden xl:block relative w-[75%] h-full rounded-r-[20px] bg-light-primary;
}

.login-bg-image {
  @apply h-full bg-contain bg-center bg-no-repeat;
  background-image: url('../assets/login-background.png');
}

.product-exhibit {
  @apply absolute top-[32px] right-[42px] flex text-white text-[22px] tracking-widest;
}

.product-icon {
  @apply h-[28px] mr-[16px] translate-y-[1px];
}

.login-bg-description {
  @apply absolute bottom-[46px] w-full text-white text-[20px] text-center font-light tracking-wide;
}

</style>
