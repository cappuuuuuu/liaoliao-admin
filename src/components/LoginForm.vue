<template>
  <div class="login-form">
    <div class="greeting-msg">Login</div>
    <div class="login-hint-msg">You need to provide an access details below to enter the manage system</div>
    <div class="login-input-container">
      <div class="account-input-wrapper">
        <img class="input-icon" :src="require('@/assets/account-icon.svg')" alt="">
        <input class="account-input" placeholder="Username">
      </div>
      <div class="password-input-wrapper">
        <img class="input-icon" :src="require('@/assets/password-icon.svg')" alt="">
        <input type="password" class="password-input" placeholder="Password">
      </div>
    </div>
    <div class="sign-in-btn">Sign in</div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm'
}
</script>

<style scoped>
.login-form {
  @apply flex flex-col justify-center w-1/2 h-full px-[8%] bg-white rounded-l-[20px];
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
