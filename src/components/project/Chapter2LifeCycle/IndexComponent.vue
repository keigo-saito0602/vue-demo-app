<template>
  <div> 
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

    <div>
      
      <EditComponent2
        v-if="mode2 === 'edit'"
        :message="message2"
        :is-used.sync="isUsed2"
        @update-message="updateMessage2"
        @save="switchToDetails2"
        @cancel="switchToDetails2"
      />
      <DetailsComponent2 v-else :message="message2" @edit="switchToEdit2" />
    </div>

  </div> 
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EditComponent from "./EditComponent.vue";
import DetailsComponent from "./DetailsComponent.vue";
import EditComponent2 from "./EditComponent2.vue";
import DetailsComponent2 from "./DetailsComponent2.vue";
import DemoAppBooleanSwitch from "@/components/parts/DemoAppToggleSwitch.vue";
import DemoAppButton from "@/components/parts/DemoAppButton.vue";

@Component({
  components: {
    EditComponent,
    DetailsComponent,
    EditComponent2,
    DetailsComponent2,
    DemoAppBooleanSwitch,
    DemoAppButton,
  },
})
export default class IndexComponent extends Vue {
  toggle = false;
  mode: "edit" | "details" = "edit";
  message = "";
  isUsed = false;

  mode2: "edit" | "details" = "edit"; // セット2の表示モード (初期値をeditに)
  message2 = "";      // セット2のメッセージ (初期値を設定)
  isUsed2 = false;                     // セット2のisUsed状態 (初期値を設定)

  switchToDetails(): void {
    this.mode = "details";
  }

  switchToEdit(): void {
    this.mode = "edit";
  }

  updateMessage(newMessage: string): void {
    this.message = newMessage;
  }
  switchToDetails2(): void {
    console.log("switchToDetails2 called"); // デバッグ用ログ
    this.mode2 = "details";
  }

  switchToEdit2(): void {
    console.log("switchToEdit2 called"); // デバッグ用ログ
    this.mode2 = "edit";
  }

  updateMessage2(newMessage: string): void {
    console.log("updateMessage2 called with:", newMessage); // デバッグ用ログ
    this.message2 = newMessage;
  }
}

</script>
