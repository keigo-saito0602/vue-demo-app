<template>
  <div class="d-flex flex-column gap-2">
    <div class="mt-4">
      <p v-if="employeeCode" class="text-body-2 text-primary">
        {{ $t("app.prop_emit.employee.employee_code", { employeeCode }) }}
      </p>
      <DemoAppCheckboxDisplay
        :isChecked="isSubscribed"
        :checkedText="$t('app.prop_emit.employee.checkbox.check')"
        :uncheckedText="$t('app.prop_emit.employee.checkbox.checknull')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import DemoAppCheckboxDisplay from "@/components/parts/DemoAppBooleanDisplay.vue";

@Component({
  name: "EmployeeCodeDisplay",
  components: {
    DemoAppCheckboxDisplay,
  },
})
export default class EmployeeCodeDisplay extends Vue {
  @Prop({ type: String, default: "" }) employeeCode!: string;
  @Prop({ type: Boolean, default: false }) isSubscribed!: boolean;
}
</script>
