<template>
  <div class="login-page">
    <div class="login-box-container">
      <LoginForm />
      <div class="login-bg-wrapper">
        <div class="login-bg-image"></div>
        <div class="product-exhibit">
          <img class="product-icon" :src="require('@/assets/logo-icon.svg')"/>
          <div class="product-name">LIAO LIAO</div>
        </div>
        <div class="login-bg-description">Because every second matters</div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
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
  @apply relative w-[75%] h-full rounded-r-[20px] bg-light-primary;
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
