<template>
  <v-btn
    :type="type"
    :loading="loading"
    :disabled="disabled"
    :color="variant === 'outline' ? undefined : 'primary'"
    :outlined="variant === 'outline'"
    class="text-none font-weight-semibold"
    @click="$emit('click')"
  >
    <slot name="icon" />
    <span v-if="!loading">{{ label || $slots.default }}</span>
    <span v-else>{{ loadingText }}</span>
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class DemoAppButton extends Vue {
  @Prop({ default: "button" }) type!: string;
  @Prop({ default: "primary" }) variant!: "primary" | "outline";
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: false }) loading!: boolean;
  @Prop({ default: "" }) label!: string;
  @Prop({ default: "" }) loadingText!: string;
}
</script>
