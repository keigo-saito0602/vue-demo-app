<template>
  <div>
    <p v-if="username">{{ $t("app.hello-title", { username }) }}</p>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({ name: "UsernameDisplay" })
export default class UsernameDisplay extends Vue {
  @Prop({ type: String, default: "" }) username;

  // コンポーネントがインスタンス化された直後に呼ばれる
  created() {
    console.log(
      "UsernameDisplay.vue: created() - コンポーネントがインスタンス化されました"
    );
  }

  // コンポーネントがマウントされた後に呼ばれる
  mounted() {
    console.log(
      "UsernameDisplay.vue: mounted() - コンポーネントがマウントされました"
    );
  }

  // コンポーネントが更新された後に呼ばれる ※あまり使われない
  updated() {
    console.log(
      "UsernameDisplay.vue: updated() - コンポーネントが更新されました, 変更内容:",
      this.username
    );
  }

  // コンポーネントが描画される直前に呼ばれる ※あまり使われない
  beforeMount() {
    console.log(
      "UsernameDisplay.vue: beforeMount() - コンポーネントが描画される前"
    );
  }

  // コンポーネントが破棄される直前に呼ばれる ※あまり使われない
  beforeDestroy() {
    console.log(
      "UsernameDisplay.vue: beforeDestroy() - コンポーネントが破棄されます"
    );
  }

  // コンポーネントが完全に破棄された後に呼ばれる
  destroyed() {
    console.log(
      "UsernameDisplay.vue: destroyed() - コンポーネントが破棄されました"
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
