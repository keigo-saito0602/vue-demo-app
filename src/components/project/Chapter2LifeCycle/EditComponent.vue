<template>
  <div>
    <h2 class="text-h6 font-weight-bold mb-2">
      {{ $t("app.lifeCycle.editTitle") }}
    </h2>
    <p class="text-body-2 mb-4">
      {{ $t("app.lifeCycle.editMessage") }}
    </p>

    <DemoAppBooleanSwitch
      v-model="isUsed"
      :label-on="$t('app.common.use')"
      :label-off="$t('app.common.notUse')"
      class="mb-4"
    />

    <DemoAppTextField
      v-if="isUsed"
      :value="message"
      :placeholder="$t('app.lifeCycle.inputPlaceholder')"
      @input="$emit('update-message', $event)"
      class="mb-2"
    />

    <p v-if="isUsed" class="text-body-2 mb-4">
      {{ $t("app.lifeCycle.inputted") }}: {{ message }}
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
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
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

  isUsed = false;

  @Emit("save")
  handleSave(): void {
    if (!this.isUsed) {
      this.$emit("update-message", ""); // 利用しない時は空にする
    }
  }

  handleCancel(): void {
    this.$emit("cancel");
  }

  created() {
    this.log("created");
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
    console.log(this.$t("app.lifeCycle.input", { message: this.message }));
  }
}
</script>
