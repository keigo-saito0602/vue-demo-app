<template>
  <div>
    <p v-if="employeeCode">{{ $t("app.employee_code", { employeeCode }) }}</p>
    <p v-if="isSubscribed">{{ $t("checkbox.check") }}</p>
    <p v-else>{{ $t("checkbox.checknull") }}</p>  
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({ name: "EmployeeCodeDisplay" })
export default class EmployeeCodeDisplay extends Vue {
  @Prop(String) employeeCode; 
  @Prop(Boolean) isSubscribed; 
}
</script>

<style scoped>
.greeting {
  font-size: 20px;
  font-weight: bold;
  color: #007bff;
  margin-top: 20px;
}
</style>