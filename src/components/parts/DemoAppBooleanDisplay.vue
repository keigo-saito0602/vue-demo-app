<template>
  <div class="checkbox-display">
    <p>{{ isChecked ? checkedText : uncheckedText }}</p>
  </div>
</template>

<script>
export default {
  name: "DemoAppCheckboxDisplay",
  props: {
    isChecked: {
      type: Boolean,
      required: true,
    },
    checkedText: {
      type: String,
      default: "",
    },
    uncheckedText: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.checkbox-display p {
  font-size: 14px;
  color: var(--vue-green);
  font-weight: 500;
  margin-top: 6px;
}
</style>
