<template>
  <div class="timer-edit-component form-card">
    <h2>{{ $t('app.timer.titleEdit') }}</h2>
    <p>{{ $t('app.timer.editPrompt') }}</p>
    <DemoAppTextField
      v-model="timerNameInput"
      :placeholder="$t('app.timer.timerNamePlaceholder')"
      :label="$t('app.timer.timerNameLabel')"
    />
    <p>{{ $t('app.timer.currentTimeLabel') }} <strong>{{ currentTime }}</strong></p>
    <DemoAppButton
      :label="$t('app.common.save')"
      @click="handleSave"
      :disabled="!timerNameInput.trim()"
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
    // 親から受け取る初期タイマー名
    initialTimerName: {
      type: String,
      default: '' // デフォルトは空文字列
    }
  },
  data() {
    return {
      currentTime: new Date().toLocaleTimeString(),
      intervalId: null,
      timerNameInput: this.initialTimerName
    };
  },
  methods: {
    handleSave() {
      this.$emit('save', this.timerNameInput.trim());
    },
    logHook(hookName, message) {
      console.log(`%c[TimerEditComponent] ${hookName}`, 'color: orange; font-weight: bold;', message);
    }
  },
  mounted() {
    this.logHook('mounted', this.$t('app.timer.logStart'));
    this.intervalId = setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
  },
  beforeDestroy() {
    this.logHook('beforeDestroy', this.$t('app.timer.logStop') + ` (Interval ID: ${this.intervalId})`);
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  },
  created() {
     this.logHook('created', 'Component instance created.');
  }
}
</script>

<style scoped>

</style>