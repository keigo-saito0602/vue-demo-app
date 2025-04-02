<template>
  <div class="d-flex flex-column gap-4">
    <!-- 入力フォーム -->
    <DemoAppTextField
      v-model="inputUsername"
      :label="$t('app.prop_emit.user.title')"
      :placeholder="$t('app.prop_emit.employee.username')"
      :rules="usernameRules"
    />

    <!-- チェックボックス -->
    <DemoAppCheckbox
      v-model="isSubscribed"
      :label="$t('app.prop_emit.user.checkbox.title')"
    />

    <!-- 送信ボタン -->
    <DemoAppButton
      :label="$t('button.submit')"
      :loading="false"
      @click="submitUsername"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import DemoAppButton from "@/components/parts/DemoAppButton.vue";
import DemoAppCheckbox from "@/components/parts/DemoAppCheckbox.vue";
import DemoAppTextField from "@/components/parts/DemoAppTextField.vue";
import { requiredRule, maxLengthRule } from "@/utils/validationRules";

@Component({
  name: "UserNameInput",
  components: {
    DemoAppButton,
    DemoAppCheckbox,
    DemoAppTextField,
  },
})
export default class UserNameInput extends Vue {
  inputUsername = "";
  isSubscribed = false;

  get usernameRules() {
    return [
      requiredRule("error.empty_username"),
      maxLengthRule(20, "error.max_length"),
    ];
  }

  submitUsername(): void {
    this.$emit("username-submitted", this.inputUsername, this.isSubscribed);
  }
}
</script>
