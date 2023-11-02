<template>
  <div>
    <p v-if="username">こんにちは, {{ username }}!</p>
    <!-- isSubscribedは監視する変化があったら教えてくれる -->
    <p v-if="isSubscribed">更新情報を購読しています。</p>
    <p v-else>更新情報を購読していません。</p>
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
