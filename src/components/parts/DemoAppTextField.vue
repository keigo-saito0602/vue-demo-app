<template>
  <v-text-field
    color="primary"
    :value="value"
    :label="label"
    :placeholder="placeholder"
    :disabled="disabled"
    :rules="rules"
    :error-messages="errorMessages"
    outlined
    dense
    hide-details="auto"
    @input="handleInput"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

type ValidationRule = (v: string) => true | string;

@Component
export default class DemoAppTextField extends Vue {
  @Prop({ required: true }) value!: string;
  @Prop({ default: "" }) label!: string;
  @Prop({ default: "" }) placeholder!: string;
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ type: Array, default: () => [] }) rules!: ValidationRule[];
  @Prop({ type: Array, default: () => [] }) errorMessages!: string[];

  handleInput(val: string): void {
    this.$emit("input", val);
  }
}
</script>
