<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.name }}（{{ user.gender }} / {{ user.birth_date }}）
      <button @click="$emit('select', user)">詳細</button>
      <button @click="$emit('edit', user)">編集</button>
      <button @click="$emit('delete', user.id)">削除</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "UserIndex",
  props: {
    users: Array,
  },
};
</script>
