<template>
  <button
    :type="type"
    class="demo-app-button"
    :class="[variant, { loading, disabled }]"
    :disabled="disabled || loading"
    @click="$emit('click')"
  >
    <!-- アイコン -->
    <slot name="icon" />

    <!-- ローディングの制御,外部APIを叩く際に使用 -->
    <span v-if="!loading">
      {{ label || $slots.default }}
    </span>
    <span v-else class="loading-text">
      {{ loadingText }}
    </span>
  </button>
</template>

<script>
export default {
  name: "DemoAppButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    variant: {
      type: String,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    loadingText: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.demo-app-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, opacity 0.2s ease;
  border: none;
  width: auto;
  align-self: flex-start;
  font-weight: 600;
}

.primary {
  background-color: var(--vue-green);
  color: var(--white);
}

.primary:hover {
  background-color: var(--vue-dark);
}

.outline {
  background-color: transparent;
  color: var(--black);
  border: 1px solid var(--dark-gray);
}

.outline:hover {
  background-color: var(--vue-green);
  color: var(--white);
  border-color: transparent;
}

.disabled,
.base-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.loading-text {
  opacity: 0.9;
}
</style>
