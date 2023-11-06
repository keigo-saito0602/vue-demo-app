<template>
  <div>
    <label for="username">Enter your username:</label>
    <input class="username-form" type="text" id="username" v-model="inputUsername" /><br>
    <button @click="submitUsername">Submit</button><br>
    <label>
      <input type="checkbox" v-model="isSubscribed" /> Subscribe to updates<br>
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
    color: black;
    margin: 10px 5px;
    padding: 5px 30px;
    border: none;
    cursor: pointer;
    /*影の基点とするためrelativeを指定*/
    position: relative;
    /*ボタンの形状*/
    text-decoration: none;
    display: inline-block;
    text-align: center;
    background: transparent;
    border-radius: 25px;
    border: solid 1px #333;
    outline: none;
    /*アニメーションの指定*/
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
    color:white;
    border-color:transparent;
  }


  username-form {
    margin: 10px 10px;
  }
</style>
