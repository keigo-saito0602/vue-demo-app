<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-4">
      <h2 class="text-h6 font-weight-bold">
        {{ $t("app.lifeCycle.detailsTitle") }}
      </h2>
      <DemoAppButton
        text
        color="primary"
        @click="$emit('edit')"
        :label="message ? $t('app.common.edit') : $t('app.common.register')"
      />
    </div>

    <div v-if="message">
      <p class="text-body-2 mb-2">{{ $t("app.lifeCycle.detailsMessage") }}</p>
      <p class="text-body-2 font-weight-medium">
        {{ $t("app.lifeCycle.inputted") }}: {{ message }}
      </p>
    </div>

    <div v-else>
      <p class="text-caption text-error">
        {{ $t("app.common.notUse") }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import DemoAppButton from "@/components/parts/DemoAppButton.vue";

@Component({
  components: { DemoAppButton },
})
export default class DetailsComponent extends Vue {
  @Prop({ default: "" }) message!: string;

  created() {
    this.log("created");
  }
  mounted() {
    this.log("mounted");
  }
  updated() {
    this.log("updated");
  }
  destroyed() {
    this.log("destroyed");
  }

  log(lifecycle: string) {
    console.log(this.$t("app.lifeCycle.details"));
    console.log(this.$t(`app.lifeCycle.${lifecycle}`));
    console.log(this.$t("app.lifeCycle.input", { message: this.message }));
  }
}
</script>
