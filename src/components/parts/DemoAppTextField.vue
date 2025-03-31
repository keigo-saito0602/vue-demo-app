<template>
  <label class="text-field-wrapper">
    <span class="text-field-label" v-if="label">{{ label }}</span>
    <input
      type="text"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: "DemoAppTextField",
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.text-field-wrapper {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-weight: 500;
}

.text-field-label {
  font-size: 14px;
  color: var(--vue-dark);
}

.text-field-wrapper input[type="text"] {
  padding: 8px 12px;
  border: 1px solid var(--vue-light-bg);
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.text-field-wrapper input[type="text"]:focus {
  border-color: var(--vue-green);
}

.text-field-wrapper input[type="text"]:disabled {
  background-color: #f3f4f6;
  cursor: not-allowed;
}
</style>
