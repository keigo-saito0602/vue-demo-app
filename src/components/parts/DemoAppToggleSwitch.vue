<template>
  <v-switch
    v-model="internalValue"
    :label="internalValue ? labelOn : labelOff"
    color="primary"
    inset
    dense
    hide-details
    class="mt-2"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class DemoAppBooleanSwitch extends Vue {
  @Prop({ required: true }) value!: boolean;
  @Prop({ default: "ON" }) labelOn!: string;
  @Prop({ default: "OFF" }) labelOff!: string;

  get internalValue(): boolean {
    return this.value;
  }

  set internalValue(val: boolean) {
    this.$emit("input", val);
  }
}
</script>
