<template>
  <div class="page-container">
    <h1 class="page-title">{{ $t("app.lifeCycle.title") }}</h1>

    <div class="form-card">
        <DemoAppCheckbox
        v-model="toggle"
        :label="$t('app.lifeCycle.enableChild')"
      />
      <DemoAppButton
        @click="onSave"
        :label="$t('app.common.save')"
      />
    </div>

    <div class="form-card">
      <div v-if="showChild">
        <EditComponent
          v-if="mode === 'edit' || message === ''"
          :message="message"
          @save="switchToDetails"
          @update-message="updateMessage"
        />
        <DetailsComponent v-else :message="message" @edit="switchToEdit" />
      </div>
    </div>
  </div>
</template>

<script>
import EditComponent from "@/components/project/Chapter2LifeCycle/EditComponent.vue";
import DetailsComponent from "@/components/project/Chapter2LifeCycle/DetailsComponent.vue";
import DemoAppCheckbox from "@/components/parts/DemoAppCheckbox.vue";
import DemoAppButton from "@/components/parts/DemoAppButton.vue";
export default {
  components: {
    EditComponent,
    DetailsComponent,
    DemoAppCheckbox, 
    DemoAppButton,
  },
  data() {
    return {
      toggle: false,
      showChild: false,
      mode: "edit",
      message: "",
    };
  },
  methods: {
    onSave() {
      this.showChild = this.toggle;
      if (this.showChild === false) {
        this.message = "";
        this.mode = "edit";
      }
    },
    switchToDetails() {
      this.mode = "details";
    },
    switchToEdit() {
      this.mode = "edit";
    },
    updateMessage(newMessage) {
      this.message = newMessage;
    },
  },
};
</script>
