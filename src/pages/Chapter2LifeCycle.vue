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
      <DemoAppCheckbox
        v-model="showTimer"
        :label="$t('app.lifeCycle.timercomponent')"
        @change="resetTimerStateIfHidden"
      />
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

    <div v-if="showTimer">
      <TimerEditComponent
        v-if="timerMode === 'edit'"
        @save="handleTimerSave"
        :initialTimerName="savedTimerName"
        :initialDurationSeconds="savedTimerDuration" 
      />
      <TimerDetailsComponent
        v-else
        :timerName="savedTimerName"
        :initialDurationSeconds="savedTimerDuration"
        :isRunning="isTimerRunning"             
        @edit="handleTimerEdit"
        @finished="handleTimerFinished"         
      />
    </div>
  </div>
</template>


<script>
import EditComponent from "@/components/project/Chapter2LifeCycle/EditComponent.vue";
import DetailsComponent from "@/components/project/Chapter2LifeCycle/DetailsComponent.vue";
import DemoAppCheckbox from "@/components/parts/DemoAppCheckbox.vue";
import DemoAppButton from "@/components/parts/DemoAppButton.vue";
import TimerEditComponent from "@/components/project/Chapter2LifeCycle/TimerEditComponent.vue";
import TimerDetailsComponent from "@/components/project/Chapter2LifeCycle/TimerDetailsComponent.vue";

export default {
  components: {
    EditComponent,
    DetailsComponent,
    DemoAppCheckbox,
    DemoAppButton,
    TimerEditComponent,
    TimerDetailsComponent,
  },
  data() {
    return {
      toggle: false,
      showChild: false,
      mode: "edit",
      message: "",

      showTimer: false,
      timerMode: 'edit',
      savedTimerName: '',
      savedTimerDuration: 0, 
      isTimerRunning: false,  
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


    handleTimerSave(name, durationSeconds) { 
      console.log('[ParentComponent] Received save event:', { name, durationSeconds });
      this.savedTimerName = name;
      this.savedTimerDuration = durationSeconds; 
      this.isTimerRunning = true;             
      this.timerMode = 'details';             
    },
    handleTimerEdit() {
      console.log('[ParentComponent] Received edit event from TimerDetailsComponent');
      this.isTimerRunning = false; 
      this.timerMode = 'edit';    
    },
    resetTimerStateIfHidden() {
      if (!this.showTimer) {
        console.log('[ParentComponent] Resetting timer state (Unchecked).');
        this.savedTimerName = '';
        this.savedTimerDuration = 0; 
        this.isTimerRunning = false; 
        this.timerMode = 'edit';
      } else {
        console.log('[ParentComponent] Initializing timer state (Checked).');
        this.isTimerRunning = false;
        this.timerMode = 'edit';
      }
    },
    handleTimerFinished() {
      console.log('[ParentComponent] Timer finished!');
      this.isTimerRunning = false;
      alert(`${this.savedTimerName} のタイマーが完了しました！`);
    }
  },
};
</script>