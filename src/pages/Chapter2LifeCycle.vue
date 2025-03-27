<template>
  <div class="page-container">
    <h1 class="page-title">ライフサイクル</h1>

    <div class="card-container">
      <div class="form-card placeholder">
        <h2>好きな音楽</h2>
        <p>ここに好きな音楽入力フォームが入る予定です。</p>
      </div>

      <div class="form-card placeholder">
        <h2>好きな食べ物</h2>
        <p>ここに好きな食べ物入力フォームが入る予定です。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onAdd() {
      console.log("onAd");
    },
  },
};
</script>

<style scoped>
.page-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 16px;
}

.page-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 32px;
  color: #2c3e50;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: flex-start;
}

.form-card {
  flex: 1 1 45%;
  min-width: 300px;
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-card.placeholder {
  opacity: 0.6;
  background-color: #f9fafb;
  border-style: dashed;
}

@media (max-width: 768px) {
  .form-card {
    flex: 1 1 100%;
  }
}
</style>
