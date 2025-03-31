<template>
  <div>
    <p v-if="username">
      {{ $t("app.prop_emit.user.hello_title", { username }) }}
    </p>
    <DemoAppCheckboxDisplay
      :isChecked="isSubscribed"
      :checkedText="$t('app.prop_emit.user.checkbox.check')"
      :uncheckedText="$t('app.prop_emit.user.checkbox.checknull')"
    />
  </div>
</template>

<script>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import DemoAppCheckboxDisplay from "@/components/parts/DemoAppBooleanDisplay.vue";

@Component({
  name: "UserNameDisplay",
  components: {
    DemoAppCheckboxDisplay,
  },
})
export default class UsernameDisplay extends Vue {
  @Prop({ type: String, default: "" }) username;
  @Prop({ type: Boolean, default: false }) isSubscribed;

  isSubscribed = this.isSubscribed; // ローカルデータとして持つ

  @Watch("isSubscribed") // 親から渡ってきた値が変更されたら、ローカルデータを更新
  onIsSubscribedChanged(newValue) {
    this.isSubscribed = newValue;
  }
}
</script>

<style scoped>
.greeting {
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
}
</style>
