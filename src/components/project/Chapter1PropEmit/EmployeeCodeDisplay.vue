<template>
  <div>
    <p v-if="employeeCode">
      {{ $t("app.prop_emit.employee.employee_code", { employeeCode }) }}
    </p>
    <DemoAppCheckboxDisplay
      :isChecked="isSubscribed"
      :checkedText="$t('app.prop_emit.employee.checkbox.check')"
      :uncheckedText="$t('app.prop_emit.employee.checkbox.checknull')"
    />
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import DemoAppCheckboxDisplay from "@/components/parts/DemoAppBooleanDisplay.vue";

@Component({
  name: "EmployeeCodeDisplay",
  components: {
    DemoAppCheckboxDisplay,
  },
})
export default class EmployeeCodeDisplay extends Vue {
  @Prop(String) employeeCode;
  @Prop(Boolean) isSubscribed;
}
</script>

<style scoped>
.greeting {
  font-size: 20px;
  font-weight: bold;
  color: var(--vue-green);
  margin-top: 20px;
}
</style>
