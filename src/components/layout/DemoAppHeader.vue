<template>
  <header class="app-header">
    <h1 class="title">{{ $t("app.start.title") }}</h1>
    <div class="header-actions">
      <button @click="$emit('navigate', 'start')">
        {{ $t("app.start.navigate.home") }}
      </button>
      <button @click="$emit('navigate', 'prop-emit')">
        {{ $t("app.start.navigate.prop_emit") }}
      </button>
      <button @click="$emit('navigate', 'lifecycle')">
        {{ $t("app.start.navigate.life_cycle") }}
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  methods: {
    handleAction() {
      alert("設定ボタンがクリックされました！");
    },
  },
};
</script>

<style scoped>
.app-header {
  background-color: var(--vue-green);
  color: var(--white);
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  margin: 0;
  font-size: 1.6em;
}

.header-actions {
  display: flex;
  gap: 10px;
}

.header-actions button {
  background-color: var(--vue-green-bright);
  color: var(--black);
  font-weight: bold;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.header-actions button:hover {
  background-color: var(--vue-green-bright);
}
</style>
