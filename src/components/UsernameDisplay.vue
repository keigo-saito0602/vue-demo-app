<template>
  <div>
    <p v-if="username">Hello, {{ username }}!</p>
  </div>
</template>

<script>
export default {
  props: {
    username: String,
  },
};
</script>
