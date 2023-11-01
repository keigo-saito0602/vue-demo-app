<template>
  <div>
    <p v-if="username">Hello, {{ username }}!</p>
    <p v-if="isSubscribed">You are subscribed to updates.</p>
    <p v-else>You are not subscribed to updates.</p>
  </div>
</template>

<script>
export default {
  props: {
    username: String,
    isSubscribed: Boolean, // チェックボックスの状態を受け取る
  },
}
</script>

<style scoped>
  .greeting {
    font-size: 20px;
    font-weight: bold;
    color: #007BFF;
    margin-top: 20px;
  }
</style>
