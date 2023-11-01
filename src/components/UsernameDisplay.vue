<template>
  <div>
    <p v-if="username" class="greeting">Hello, {{ username }}!</p>
  </div>
</template>

<script>
export default {
  props: {
    username: String,
  },
}
</script>

<style scoped>
/* Scoped style that only applies to this component */
.greeting {
  font-size: 20px;
  font-weight: bold;
  color: #007BFF;
  margin-top: 20px;
}
</style>
