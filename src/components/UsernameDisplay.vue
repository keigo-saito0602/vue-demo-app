<template>
  <div>
    <p v-if="username">{{ $t('app.hello-title', { username }) }}</p>
    <p v-if="isSubscribed">{{$t("checkbox.check")}}</p>
    <p v-else>{{$t("checkbox.checknull")}}</p>
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
