<template>
  <div class="d-flex flex-column gap-4">
    <DemoAppTextField
      v-model="inputEmployeeCode"
      :label="$t('app.prop_emit.employee.navigate')"
      :placeholder="$t('app.prop_emit.employee.placeholder')"
      :rules="employeeCodeRules"
    />

    <DemoAppCheckbox
      v-model="isSubscribed"
      :label="$t('app.prop_emit.employee.checkbox.title')"
    />

    <DemoAppButton
      :label="$t('button.submit')"
      :loading="loading"
      @click="submitEmployeeCode"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import DemoAppButton from "@/components/parts/DemoAppButton.vue";
import DemoAppCheckbox from "@/components/parts/DemoAppCheckbox.vue";
import DemoAppTextField from "@/components/parts/DemoAppTextField.vue";
import { requiredRule } from "@/utils/validationRules";

@Component({
  name: "EmployeeCodeInput",
  components: {
    DemoAppButton,
    DemoAppCheckbox,
    DemoAppTextField,
  },
})
export default class EmployeeCodeInput extends Vue {
  inputEmployeeCode = "";
  isSubscribed = false;
  loading = false;

  get employeeCodeRules() {
    return [requiredRule("error.empty_employee_code")];
  }

  submitEmployeeCode(): void {
    this.$emit(
      "employee-code-submitted",
      this.inputEmployeeCode,
      this.isSubscribed
    );
  }
}
</script>
