<template>
  <label class="text-field-wrapper">
    <span class="text-field-label" v-if="label">{{ label }}</span>
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"

      :min="min"       
      :max="max"
    />
  </label>
</template>

<script>
export default {
  name: "DemoAppTextField",
  props: {
    value: {
      type: [String, Number], 
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
    type: {  
      type: String,
      default: 'text',
      validator: (value) => { 
        return ['text', 'number', 'password', 'email', 'tel', 'url'].includes(value);
      }
  },
    min: {
      type: [String, Number],
      default: undefined
    },
    max: {
      type: [String, Number],
      default: undefined
    }
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

.text-field-wrapper input[type="text"],
.text-field-wrapper input[type="number"] {
  padding: 8px 12px;
  border: 1px solid var(--vue-light-bg);
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.text-field-wrapper input[type="text"]:focus,
.text-field-wrapper input[type="number"]:focus {
  border-color: var(--vue-green);
}

.text-field-wrapper input[type="text"]:disabled,
.text-field-wrapper input[type="number"]:disabled {
  background-color: #f3f4f6;
  cursor: not-allowed;
}
</style>
