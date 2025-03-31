<template>
  <div class="form-card">
    <h2>{{ $t("app.lifeCycle.editTitle") }}</h2>
    <p>{{ $t("app.lifeCycle.editMessage") }}</p>
    <input
      :value="message"
      @input="$emit('update-message', $event.target.value)"
      :placeholder="$t('app.lifeCycle.inputPlaceholder')"
    />
    <p>{{ $t("app.lifeCycle.inputted") }}: {{ message }}</p>
    <button @click="handleSave">{{ $t("app.common.save") }}</button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleSave() {
      this.$emit("save");
    },
  },
  created() {
    console.log(this.$t("app.lifeCycle.edit"));
    console.log(this.$t("app.lifeCycle.created"));
    console.log(this.$t("app.lifeCycle.input", { message: this.message }));
  },
  mounted() {
    console.log(this.$t("app.lifeCycle.edit"));
    console.log(this.$t("app.lifeCycle.mounted"));
    console.log(this.$t("app.lifeCycle.input", { message: this.message }));
  },
  updated() {
    console.log(this.$t("app.lifeCycle.edit"));
    console.log(this.$t("app.lifeCycle.updated"));
    console.log(this.$t("app.lifeCycle.input", { message: this.message }));
  },
  destroyed() {
    console.log(this.$t("app.lifeCycle.edit"));
    console.log(this.$t("app.lifeCycle.destroyed"));
    console.log(this.$t("app.lifeCycle.input", { message: this.message }));
  },
};
</script>
