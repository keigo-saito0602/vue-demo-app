<template>
  <label class="checkbox-wrapper">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <span class="checkbox-label">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: "DemoAppCheckbox",
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 500;
}

.checkbox-wrapper input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: var(--vue-green);
  cursor: pointer;
}

.checkbox-wrapper input[type="checkbox"]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
