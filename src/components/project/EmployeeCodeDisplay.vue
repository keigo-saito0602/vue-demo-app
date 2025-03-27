<template>
  <div>
    <p v-if="employeeCode">
      {{ $t("app.employee_code", { employeeCode }) }}
    </p>
    <DemoAppCheckboxDisplay
      :isChecked="termsOfUse"
      :checkedText="$t('checkbox.check')"
      :uncheckedText="$t('app.prop_emit.user.checkbox.checknull')"
    />
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import DemoAppCheckboxDisplay from "@/components/parts/DemoAppBooleanDisplay.vue";

@Component({
  name: "EmployeeCodeDisplay",
  components: {
    DemoAppCheckboxDisplay, // チェックボックス表示用コンポーネントをインポート
  },
})
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
