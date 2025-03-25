<template>
  <div>
    <p v-if="username">{{ $t("app.hello-title", { username }) }}</p>
    <p v-if="isSubscribed">{{ $t("checkbox.check") }}</p>
    <p v-else>{{ $t("checkbox.checknull") }}</p>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({ name: "UsernameDisplay" })
export default class UsernameDisplay extends Vue {
  @Prop(String) username; // 親に書いてある:username="username"が渡ってくる
  @Prop(Boolean) isSubscribed; // 親に書いてある:is-subscribed="isSubscribed"が渡ってくる
}
</script>

<style scoped>
.greeting {
  font-size: 20px;
  font-weight: bold;
  color: #007bff;
  margin-top: 20px;
}
</style>
