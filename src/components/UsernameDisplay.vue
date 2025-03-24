<template>
  <div>
    <p v-if="username">{{ $t("app.hello-title", { username }) }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({ name: "UsernameDisplay" })
export default class UsernameDisplay extends Vue {
  @Prop({ default: "" }) readonly username!: string;

  created(): void {
    console.log(
      "UsernameDisplay.vue: created() - コンポーネントがインスタンス化されました"
    );
  }

  mounted(): void {
    console.log(
      "UsernameDisplay.vue: mounted() - コンポーネントがマウントされました"
    );
  }

  updated(): void {
    console.log(
      "UsernameDisplay.vue: updated() - コンポーネントが更新されました:",
      this.username
    );
  }

  beforeMount(): void {
    console.log("UsernameDisplay.vue: beforeMount()");
  }

  beforeDestroy(): void {
    console.log("UsernameDisplay.vue: beforeDestroy()");
  }

  destroyed(): void {
    console.log("UsernameDisplay.vue: destroyed()");
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
