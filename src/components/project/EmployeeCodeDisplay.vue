<template>
  <div>
    <p v-if="employeeCode">{{ $t("app.employee_code", { employeeCode }) }}</p>
    <p v-if="termsOfUse">{{ $t("checkbox.check") }}</p>
    <p v-else>{{ $t("checkbox.checknull") }}</p>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({ name: "EmployeeCodeDisplay" })
export default class EmployeeCodeDisplay extends Vue {
  @Prop(String) employeeCode;
  @Prop(Boolean) termsOfUse;
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
