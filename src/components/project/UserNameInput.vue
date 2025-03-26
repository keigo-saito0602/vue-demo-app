<template>
  <div class="form-group">
    <label for="username">{{ $t("app.prop_emit.user.title") }}</label>
    <input
      class="form-input"
      type="text"
      id="username"
      v-model="inputUsername"
    />

    <DemoAppCheckbox
      v-model="isSubscribed"
      :label="$t('app.prop_emit.user.checkbox.title')"
    />

    <DemoAppButton @click="submitUsername" :label="$t('button.submit')" />

    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import DemoAppButton from "@/components/parts/DemoAppButton.vue";
import DemoAppCheckbox from "@/components/parts/DemoAppCheckbox.vue";

@Component({
  name: "UserNameInput",
  components: {
    DemoAppButton,
    DemoAppCheckbox,
  },
})
export default class UserNameInput extends Vue {
  inputUsername = "";
  isSubscribed = false;
  errorMessage = "";

  submitUsername() {
    if (this.inputUsername.trim() === "") {
      this.errorMessage = this.$t("error.empty_username");
      return;
    }
    this.errorMessage = "";
    this.$emit("username-submitted", this.inputUsername, this.isSubscribed);
  }
}
</script>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 160px;
}

.form-input {
  padding: 10px 14px;
  font-size: 16px;
  border: 1px solid var(--vue-green);
  border-radius: 8px;
}

.checkbox-group {
  margin-top: 8px;
}

.error-message {
  color: var(--error);
  font-size: 14px;
}
</style>
