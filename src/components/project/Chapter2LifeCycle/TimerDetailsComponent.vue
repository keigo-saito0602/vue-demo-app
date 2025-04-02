<template>
  <div class="timer-details-component form-card">
    <h2>{{ $t('app.timer.titleDetails') }}</h2>
    <p>
      {{ $t('app.timer.timerNameLabel') }}: <strong>{{ timerName }}</strong> 
    </p>
    <p>{{ $t('app.timer.currentTimeLabel') }} <strong>{{ currentTime }}</strong></p>
    <!-- 編集ボタン -->
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
    }
  },
  data() {
    return {
      currentTime: new Date().toLocaleTimeString(),
      intervalId: null
    };
  },
  methods: {
    handleEdit() {
      this.$emit('edit');
    },
    logHook(hookName, message) {
      console.log(`%c[TimerDetailsComponent] ${hookName}`, 'color: purple; font-weight: bold;', message);
    }
  },
  mounted() {
    this.logHook('mounted', this.$t('app.timer.logStart') + ` (Timer Name: ${this.timerName})`);
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
     this.logHook('created', `Component instance created. Timer Name: ${this.timerName}`);
  }
}
</script>

<style scoped>

</style>