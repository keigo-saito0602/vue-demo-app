<template>
  <div class="text-caption font-weight-medium text-primary mt-2">
    {{ isChecked ? checkedText : uncheckedText }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class DemoAppBooleanDisplay extends Vue {
  @Prop({ required: true }) isChecked!: boolean;
  @Prop({ default: "" }) checkedText!: string;
  @Prop({ default: "" }) uncheckedText!: string;
}
</script>
