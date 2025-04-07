<template>
  <div>
    <h2 class="text-h6 font-weight-bold mb-2">
      {{ $t("app.lifeCycle.editTitle") }}
    </h2>
    <p class="text-body-2 mb-4">
      {{ $t("app.lifeCycle.editMessage") }}
    </p>
<DemoAppBooleanSwitch
  :value="localIsUsed"
  @input="localIsUsed = $event"
  :label-on="$t('app.common.use')"
  :label-off="$t('app.common.notUse')"
  class="mb-4"
/>

<DemoAppTextField
  v-if="localIsUsed"
  :value="localMessage"
  :placeholder="$t('app.lifeCycle.inputPlaceholder')"
  :rules="rules"
  :error-messages="errorMessages"
  @input="localMessage = $event"
  class="mb-2"
/>

<p v-if="localIsUsed" class="text-body-2 mb-4">
  {{ $t("app.lifeCycle.inputted") }}: {{ localMessage }}
</p>

<div class="d-flex justify-end gap-4 mt-4">
  <DemoAppButton
    :label="$t('app.common.cancel')"
    variant="outline"
    @click="handleCancel"
  />
  <DemoAppButton
    :label="$t('app.common.save')"
    color="primary"
    @click="handleSave"
  />
</div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import DemoAppButton from "@/components/parts/DemoAppButton.vue";
import DemoAppTextField from "@/components/parts/DemoAppTextField.vue";
import DemoAppBooleanSwitch from "@/components/parts/DemoAppToggleSwitch.vue";

@Component({
  components: {
    DemoAppButton,
    DemoAppTextField,
    DemoAppBooleanSwitch,
  },
})
export default class EditComponent extends Vue {
  @Prop({ default: "" }) message!: string;
  @Prop({ default: false }) isUsed!: boolean;

  localMessage = "";
  localIsUsed = false;

  errorMessages: string[] = [];

  created() {
    this.localMessage = this.message;
    this.localIsUsed = this.isUsed;
    this.log("created");
  }

  get rules() {
    return [(v: string) => !!v?.trim() || this.$t("error.empty_username")];
  }


  handleSave(): void {
    if (this.localIsUsed && !this.localMessage.trim()) {
      this.errorMessages = [this.$t("error.empty_username") as string];
      return;
    }
    this.errorMessages = [];

    this.$emit("update:isUsed", this.localIsUsed);
    this.$emit("update-message", this.localIsUsed ? this.localMessage : "");
    this.$emit("save");
  }

  handleCancel(): void {
    this.$emit("cancel");
  }

  mounted() {
    this.log("mounted");
  }
  updated() {
    this.log("updated");
  }
  destroyed() {
    this.log("destroyed");
  }

  log(lifecycle: string) {
    console.log(this.$t("app.lifeCycle.edit"));
    console.log(this.$t(`app.lifeCycle.${lifecycle}`));
    console.log(this.$t("app.lifeCycle.input", { message: this.localMessage }));
  }
}
</script>