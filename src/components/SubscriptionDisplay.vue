<template>
  <div>
    <p v-if="isSubscribed">{{ $t("checkbox.check") }}</p>
    <p v-else>{{ $t("checkbox.checknull") }}</p>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({ name: "SubscriptionDisplay" })
export default class SubscriptionDisplay extends Vue {
  @Prop({ type: Boolean, default: false }) isSubscribed;

  // コンポーネントがインスタンス化された直後に呼ばれる
  created() {
    console.log(
      "SubscriptionDisplay.vue: created() - コンポーネントがインスタンス化されました"
    );
  }
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
