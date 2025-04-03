<template>
  <div class="timer-details-component form-card">
    <h2>{{ $t('app.timer.titleDetails') }}</h2>
    <p>
      {{ $t('app.timer.timerNameLabel') }}: <strong>{{ timerName }}</strong>
    </p>
    <p class="remaining-time-display">
      {{ $t('app.timer.remainingTimeLabel') }}: <strong data-testid="remaining-time">{{ formattedTime }}</strong>
    </p>
    <DemoAppButton
      :label="$t('app.common.edit')"
      variant="outline"
      @click="handleEdit"
    />
  </div>
</template>

<script>
import DemoAppButton from "@/components/parts/DemoAppButton.vue";

export default {
  name: 'TimerDetailsComponent',
  components: {
    DemoAppButton
  },
  props: {
    timerName: {
      type: String,
      required: true
    },
    initialDurationSeconds: {
      type: Number,
      required: true
    },
    isRunning: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      remainingTime: this.initialDurationSeconds, 
      timerIntervalId: null
    };
  },
  computed: {
    formattedTime() {
      if (typeof this.remainingTime !== 'number' || this.remainingTime < 0) {
        return '00:00';
      }
      const minutes = Math.floor(this.remainingTime / 60);
      const seconds = this.remainingTime % 60;
      const paddedMinutes = String(minutes).padStart(2, '0');
      const paddedSeconds = String(seconds).padStart(2, '0');
      return `${paddedMinutes}:${paddedSeconds}`;
    }
  },
  methods: {
    handleEdit() {
      this.$emit('edit');
    },
    startTimer() {
      if (this.timerIntervalId || this.remainingTime <= 0) return;

      this.logHook('startTimer', `Starting timer with ${this.remainingTime} seconds remaining.`);
      this.timerIntervalId = setInterval(() => {
        if (this.remainingTime > 0) {
          this.remainingTime--;
        } else {
          this.stopTimer(); 
          this.logHook('timerFinished', 'Timer reached 00:00.');
          this.$emit('finished'); 
        }
      }, 1000);
    },
    stopTimer() {
      if (this.timerIntervalId) {
        this.logHook('stopTimer', `Stopping timer. Interval ID: ${this.timerIntervalId}`);
        clearInterval(this.timerIntervalId);
        this.timerIntervalId = null;
      }
    },
    resetTimer() {
        this.stopTimer(); 
        this.remainingTime = this.initialDurationSeconds; 
        this.logHook('resetTimer', `Timer reset to ${this.remainingTime} seconds.`);
    },
    logHook(hookName, message) {
      console.log(`%c[TimerDetailsComponent] ${hookName}`, 'color: purple; font-weight: bold;', message);
    }
  },
  watch: {
    isRunning(newValue, oldValue) {
      this.logHook('watch:isRunning', `isRunning changed from ${oldValue} to ${newValue}`);
      if (newValue) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    },
    initialDurationSeconds(newValue){
        if (!this.isRunning) {
            this.remainingTime = newValue;
            this.logHook('watch:initialDurationSeconds', `Remaining time updated to ${newValue} because initial duration changed and timer is not running.`);
        } else {
             this.logHook('watch:initialDurationSeconds', `Initial duration changed to ${newValue}, but timer is running, so remaining time is not updated.`);
        }
    }
  },
  mounted() {
    this.remainingTime = this.initialDurationSeconds; 
    this.logHook('mounted', `Component mounted. Initial duration: ${this.initialDurationSeconds}s. Remaining: ${this.remainingTime}s. IsRunning: ${this.isRunning}`);
    if (this.isRunning) {
      this.startTimer();
    }
  },
  beforeDestroy() {
    this.logHook('beforeDestroy', 'Component will be destroyed. Stopping timer.');
    this.stopTimer(); 
  },
  created() {
     this.logHook('created', `Component instance created. Timer Name: ${this.timerName}`);
  }
}
</script>

<style scoped>
.remaining-time-display {
  font-size: 1.8em;
  font-weight: bold;
  margin: 20px 0; 
  color: var(--color-primary, #42b983);
}
</style>