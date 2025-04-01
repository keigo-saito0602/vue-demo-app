<template>
  <div class="form-card">
    <div class="card-header">
      <h2>{{ $t("app.lifeCycle.detailsTitle") }}</h2>
      <DemoAppButton
        @click="$emit('edit')"
        :label="$t('app.common.edit')"
        variant="outline"  
      />
    </div>
    <p>{{ $t("app.lifeCycle.detailsMessage") }}</p>
    <p>{{ $t("app.lifeCycle.inputted") }}: {{ message }}</p>
  </div>
</template>

<script>
import DemoAppButton from "@/components/parts/DemoAppButton.vue";

export default {
  components: {
    DemoAppButton,
  },
  props: {
    message: {
      type: String,
      default: "",
    },
  },
  created() {
    console.log(this.$t("app.lifeCycle.details"));
    console.log(this.$t("app.lifeCycle.created"));
    console.log(this.$t("app.lifeCycle.input", { message: this.message }));
  },
  mounted() {
    console.log(this.$t("app.lifeCycle.details"));
    console.log(this.$t("app.lifeCycle.mounted"));
    console.log(this.$t("app.lifeCycle.input", { message: this.message }));
  },
  updated() {
    console.log(this.$t("app.lifeCycle.details"));
    console.log(this.$t("app.lifeCycle.updated"));
    console.log(this.$t("app.lifeCycle.input", { message: this.message }));
  },
  destroyed() {
    console.log(this.$t("app.lifeCycle.details"));
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
