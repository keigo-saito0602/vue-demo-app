<template>
  <div class="d-flex flex-column gap-2">
    <div class="mt-4">
      <p v-if="username" class="text-body-2 text-primary">
        {{ $t("app.prop_emit.user.hello_title", { username }) }}
      </p>
      <DemoAppCheckboxDisplay
        :isChecked="isSubscribed"
        :checkedText="$t('app.prop_emit.user.checkbox.check')"
        :uncheckedText="$t('app.prop_emit.user.checkbox.checknull')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import DemoAppCheckboxDisplay from "@/components/parts/DemoAppBooleanDisplay.vue";

@Component({
  name: "UserNameDisplay",
  components: {
    DemoAppCheckboxDisplay,
  },
})
export default class UserNameDisplay extends Vue {
  @Prop({ type: String, default: "" }) username!: string;
  @Prop({ type: Boolean, default: false }) isSubscribed!: boolean;
}
</script>
