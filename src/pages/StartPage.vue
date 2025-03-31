<template>
  <div class="start-page">
    <h1 class="start-title">{{ $t("app.header.title") }}</h1>
    <p class="start-description">{{ $t("app.header.explanation") }}</p>
    <ul class="start-list">
      <li>
        <span class="check-icon">✔</span> {{ $t("app.header.prop_emit") }}
      </li>
      <li>
        <span class="check-icon">✔</span> {{ $t("app.header.life_cycle") }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "StartPage",
};
</script>

<style scoped>
.start-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: var(--vue-light-bg);
  color: var(--dark-gray);
}

.start-card {
  background-color: var(--white);
  border-radius: 30px;
  padding: 40px 32px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  text-align: center;
  margin-bottom: 48px;
}

.start-title {
  font-size: 28px;
  font-weight: bold;
  color: var(--vue-dark);
  margin-bottom: 16px;
}

.start-description {
  font-size: 16px;
  margin-bottom: 24px;
  color: var(--middle-gray);
}

.start-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.start-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  font-size: 16px;
  margin-bottom: 10px;
  color: var(--vue-green);
  font-weight: 500;
}

.check-icon {
  color: var(--vue-green);
  font-weight: bold;
  font-size: 18px;
}

.start-footer {
  text-align: center;
  font-size: 14px;
  color: var(--middle-gray);
}

.footer-text {
  margin-bottom: 4px;
}

.footer-link {
  color: var(--vue-green);
  text-decoration: none;
  font-weight: 500;
}

.footer-link:hover {
  text-decoration: underline;
}
</style>
