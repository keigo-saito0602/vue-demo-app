<template>
  <div>
    <p v-if="isSubscribed">{{ $t("checkbox.check") }}</p>
    <p v-else>{{ $t("checkbox.checknull") }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({ name: "SubscriptionDisplay" })
export default class SubscriptionDisplay extends Vue {
  @Prop({ type: Boolean, default: false }) readonly isSubscribed!: boolean;

  created(): void {
    console.log("SubscriptionDisplay.vue: created()");
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
