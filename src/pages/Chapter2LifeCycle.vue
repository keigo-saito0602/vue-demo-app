<template>
  <div class="page-container">
    <h1 class="page-title">{{ $t("app.lifeCycle.title") }}</h1>

    <div class="form-card">
      <label>
        <input type="checkbox" v-model="toggle" />
        {{ $t("app.lifeCycle.enableChild") }}
      </label>
      <button @click="onSave">{{ $t("app.common.save") }}</button>
    </div>

    <div class="form-card">
      <div v-if="showChild">
        <EditComponent
          v-if="mode === 'edit'"
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

export default {
  components: {
    EditComponent,
    DetailsComponent,
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
