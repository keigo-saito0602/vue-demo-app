<template>
  <div class="form-card">
    <h2>{{ $t("app.lifeCycle.editTitle") }}</h2>
    <p>{{ $t("app.lifeCycle.editMessage") }}</p>
    <DemoAppTextField
      :value="message"
      @input="$emit('update-message', $event)"
      :placeholder="$t('app.lifeCycle.inputPlaceholder')"
    />
    <p>{{ $t("app.lifeCycle.inputted") }}: {{ message }}</p>
    <DemoAppButton
      @click="handleSave"
      :label="$t('app.common.save')"
    />
  </div>
</template>

<script>
import DemoAppTextField from "@/components/parts/DemoAppTextField.vue";
import DemoAppButton from "@/components/parts/DemoAppButton.vue"; 
export default {
  components: {
    DemoAppTextField,
    DemoAppButton,
  },
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
