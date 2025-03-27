<template>
  <footer class="app-footer">
    <p>{{ $t("app.footer.title") }}</p>
    <a>{{ $t("app.footer.link") }}</a>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.app-footer {
  background-color: var(--white);
  padding: 12px;
  text-align: center;
  color: var(--middle-gray);
  font-size: 0.9em;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  margin-top: 30px;
}
</style>
