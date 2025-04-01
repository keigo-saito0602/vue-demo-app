<template>
  <v-checkbox
    :value="value"
    :label="label"
    :disabled="disabled"
    @change="$emit('input', $event)"
    class="mt-2"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class DemoAppCheckbox extends Vue {
  @Prop({ required: true }) value!: boolean;
  @Prop({ default: "" }) label!: string;
  @Prop({ default: false }) disabled!: boolean;
}
</script>
