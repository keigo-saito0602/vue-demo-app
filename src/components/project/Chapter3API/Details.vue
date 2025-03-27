<template>
  <div v-if="user">
    <h3>詳細表示</h3>
    <p>ID: {{ user.id }}</p>
    <p>名前: {{ user.name }}</p>
    <p>性別: {{ user.gender }}</p>
    <p>生年月日: {{ user.birth_date }}</p>
  </div>
</template>

<script>
export default {
  name: "UserDetails",
  props: {
    user: Object,
  },
};
</script>
