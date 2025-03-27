<template>
  <div class="form-group">
    <label for="employee-code">{{
      $t("app.prop_emit.employee.navigate")
    }}</label>
    <input
      class="form-input"
      type="text"
      id="employee-code"
      v-model="inputEmployeeCode"
    />

    <DemoAppButton
      :loading="loading"
      :disabled="inputEmployeeCode.trim() === ''"
      :label="$t('button.submit')"
      @click="submitEmployeeCode"
    />

    <div class="checkbox-group">
      <label>
        <input type="checkbox" v-model="termsOfUse" />
        {{ $t("checkbox.title") }}
      </label>
    </div>

    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import DemoAppButton from "@/components/parts/DemoAppButton.vue";

@Component({
  name: "EmployeeCodeInput",
  components: {
    DemoAppButton,
  },
})
export default class EmployeeCodeInput extends Vue {
  inputEmployeeCode = "";
  termsOfUse = false;
  errorMessage = "";
  loading = false;

  submitEmployeeCode() {
    if (this.inputEmployeeCode.trim() === "") {
      this.errorMessage = this.$t("error.empty_employee_code");
      return;
    }
    this.errorMessage = "";
    this.$emit(
      "employee-code-submitted",
      this.inputEmployeeCode,
      this.termsOfUse
    );
  }
}
</script>

<style scoped>
/* 共通スタイルと同じにする */
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
