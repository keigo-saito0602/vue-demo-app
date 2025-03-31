<template>
  <div class="form-card">
    <div class="card-header">
      <h2>{{ $t("app.lifeCycle.detailsTitle") }}</h2>
      <button @click="$emit('edit')">{{ $t("app.common.edit") }}</button>
    </div>
    <p>{{ $t("app.lifeCycle.detailsMessage") }}</p>
    <p>{{ $t("app.lifeCycle.inputted") }}: {{ message }}</p>
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
  created() {
    console.log(this.$t("app.details.lifeCycle.created"));
    console.log(this.$t("app.lifeCycle.created"));
    console.log(this.$t("app.lifeCycle.input", { message: this.message }));
  },
  mounted() {
    console.log(this.$t("app.details.lifeCycle.created"));
    console.log(this.$t("app.lifeCycle.mounted"));
    console.log(this.$t("app.lifeCycle.input", { message: this.message }));
  },
  updated() {
    console.log(this.$t("app.details.lifeCycle.created"));
    console.log(this.$t("app.lifeCycle.updated"));
    console.log(this.$t("app.lifeCycle.input", { message: this.message }));
  },
  destroyed() {
    console.log(this.$t("app.details.lifeCycle.created"));
    console.log(this.$t("app.lifeCycle.destroyed"));
    console.log(this.$t("app.lifeCycle.input", { message: this.message }));
  },
};
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
