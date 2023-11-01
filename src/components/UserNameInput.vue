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
}
</script>

<style scoped>
/* Scoped style that only applies to this component */
label {
  font-weight: bold;
  margin-right: 10px;
}

input {
  padding: 5px;
}

button {
  background-color: #007BFF;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
