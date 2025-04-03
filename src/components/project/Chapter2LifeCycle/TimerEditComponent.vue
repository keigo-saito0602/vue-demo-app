<template>
  <div class="timer-edit-component form-card">
    <h2>{{ $t('app.timer.titleEdit') }}</h2>
    <p>{{ $t('app.timer.editPrompt') }}</p>

    <DemoAppTextField
      v-model="timerNameInput"
      :placeholder="$t('app.timer.timerNamePlaceholder')"
      :label="$t('app.timer.timerNameLabel')"
      class="input-field"
    />

    <div class="time-inputs">
      <DemoAppTextField
        v-model="minutesInput"
        type="number"
        :label="$t('app.timer.minutesLabel')"
        min="0"
        class="input-field time-input"
      />
      <DemoAppTextField
        v-model="secondsInput"
        type="number"
        :label="$t('app.timer.secondsLabel')"
        min="0"
        max="59"
        class="input-field time-input"
      />
    </div>

    <DemoAppButton
      :label="$t('app.common.save')"
      @click="handleSave"
      :disabled="!timerNameInput.trim() || totalSeconds <= 0"
    />
  </div>
</template>

<script>
import DemoAppTextField from "@/components/parts/DemoAppTextField.vue";
import DemoAppButton from "@/components/parts/DemoAppButton.vue";

export default {
  name: 'TimerEditComponent',
  components: {
    DemoAppTextField,
    DemoAppButton
  },
  props: {
    initialTimerName: {
      type: String,
      default: ''
    },
    initialDurationSeconds: {
      type: Number,
      default: 0
    }
  },
  data() {
    const initialMinutes = Math.floor(this.initialDurationSeconds / 60);
    const initialSeconds = this.initialDurationSeconds % 60;
    return {
      timerNameInput: this.initialTimerName,
      minutesInput: initialMinutes,
      secondsInput: initialSeconds,
    };
  },
  computed: {
    totalSeconds() {
      const mins = Number(this.minutesInput) || 0;
      const secs = Number(this.secondsInput) || 0;
      return Math.max(0, mins * 60 + secs);
    }
  },
  methods: {
    handleSave() {
      if (!this.timerNameInput.trim() || this.totalSeconds <= 0) {
        return;
      }
      this.$emit('save', this.timerNameInput.trim(), this.totalSeconds);
    },
    logHook(hookName, message) {
      console.log(`%c[TimerEditComponent] ${hookName}`, 'color: orange; font-weight: bold;', message);
    }
  },
  mounted() {
    this.logHook('mounted', 'Component mounted.');
  },
  beforeDestroy() {
    this.logHook('beforeDestroy', 'Component will be destroyed.');
  },
  created() {
     this.logHook('created', `Component instance created. Initial Name: ${this.initialTimerName}, Initial Seconds: ${this.initialDurationSeconds}`);
  }
}
</script>

<style scoped>

</style>