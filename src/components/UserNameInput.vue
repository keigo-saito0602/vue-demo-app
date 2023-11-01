<template>
  <div>
    <label for="username">Enter your username:</label>
    <input type="text" id="username" v-model="inputUsername" />
    <button @click="submitUsername">Submit</button>
    <label>
      <input type="checkbox" v-model="isSubscribed" /> Subscribe to updates
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputUsername: '',
      isSubscribed: false, // チェックボックスの初期状態
    };
  },
  methods: {
    submitUsername() {
      // チェックボックスの状態も親コンポーネントに送信
      this.$emit('username-submitted', this.inputUsername, this.isSubscribed);
    },
  },
}
</script>

<style scoped>
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
