<template>
  <div>
    <label for="username">Enter your username:</label>
    <input type="text" id="username" v-model="inputUsername" />
    <button @click="submitUsername">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputUsername: '',
    };
  },
  methods: {
    submitUsername() {
      this.$emit('username-submitted', this.inputUsername);
    },
  },
};
</script>
