<template>
  <div class="start-page">
    <h1>{{ $t("app.header.title") }}</h1>
    <p>{{ $t("app.header.explanation") }}</p>
    <ul>
      <li>{{ $t("app.header.prop_emit") }}</li>
      <li>{{ $t("app.header.life_cycle") }}</li>
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
  text-align: center;
  padding: 30px;
  font-size: 18px;
}
.start-page h1 {
  font-size: 24px;
  margin-bottom: 16px;
}
</style>
