<template>
  <div>
    <EditComponent
      v-if="mode === 'edit'"
      :message="message"
      :is-used.sync="isUsed"
      @update-message="updateMessage"
      @save="switchToDetails"
      @cancel="switchToDetails"
    />
    <DetailsComponent v-else :message="message" @edit="switchToEdit" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EditComponent from "./EditComponent.vue";
import DetailsComponent from "./DetailsComponent.vue";
import DemoAppBooleanSwitch from "@/components/parts/DemoAppToggleSwitch.vue";
import DemoAppButton from "@/components/parts/DemoAppButton.vue";

@Component({
  components: {
    EditComponent,
    DetailsComponent,
    DemoAppBooleanSwitch,
    DemoAppButton,
  },
})
export default class IndexComponent extends Vue {
  toggle = false;
  mode: "edit" | "details" = "edit";
  message = "";
  isUsed = false;

  switchToDetails(): void {
    this.mode = "details";
  }

  switchToEdit(): void {
    this.mode = "edit";
  }

  updateMessage(newMessage: string): void {
    this.message = newMessage;
  }
}
</script>
