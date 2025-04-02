<template>
  <v-text-field
    color="primary"
    :value="value"
    :label="label"
    :placeholder="placeholder"
    :disabled="disabled"
    :rules="rules"
    outlined
    dense
    :hide-details="false"
    @input="$emit('input', $event)"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class DemoAppTextField extends Vue {
  @Prop({ required: true }) value!: string;
  @Prop({ default: "" }) label!: string;
  @Prop({ default: "" }) placeholder!: string;
  @Prop({ default: false }) disabled!: boolean;

  @Prop({ type: Array, default: () => [] }) rules!: ((
    v: any
  ) => true | string)[];
}
</script>
