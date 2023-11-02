<template>
  <div>
    <label for="username">Enter your username:</label><br>
    <!-- v-modelは双方向バインディング -->
    <!-- フォームで書き換えたらロジックに書いてある変数も書き換わる -->
    <!-- 逆にロジックに文字列をいれたらフォームも書き変わる -->
    <!-- v-model便利だけど、見づらい -->
    <input type="text" id="username" placeholder="フォーム1" @input="inputUsername = $event.target.value" /><br>
    <input type="text" id="username" placeholder="フォーム2" :value="inputUsername" /><br>
    <p>{{inputUsername}}</p><br>
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
      // this.$emit('<イベント名>',<データ>);
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
