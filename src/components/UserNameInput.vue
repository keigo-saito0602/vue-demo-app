<template>
  <div>
    <label for="username">{{ $t("app.title") }}</label>
    <input
      class="username-form"
      type="text"
      id="username"
      v-model="inputUsername"
    /><br />
    <button @click="submitUsername">{{ $t("button.submit") }}</button><br />
    <label>
      <input type="checkbox" v-modeßl="isSubscribed" /> {{ $t("checkbox.title")
      }}<br />
    </label>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "UserNameInput" })
export default class UserNameInput extends Vue {
  inputUsername = "";
  isSubscribed = false;
  errorMessage = "";

  submitUsername() {
    if (this.inputUsername.trim() === "") {
      // 空白文字のみの場合も考慮して trim() を使う
      this.errorMessage = this.$t("1文字以上入力してください"); //エラーメッセージを格納
      return; // $emit しない
    }
    this.errorMessage = ""; // エラーメッセージをクリア
    this.$emit("username-submitted", this.inputUsername, this.isSubscribed); // ここなんやん
    // username-submitted イベント名 親にある@username-submittedのこと
    // 親に渡す値 this.inputUsername, this.isSubscribed
    // 親に書いてある関数の引数を見るとわかりやすいかも、onUsernameSubmitted
  }
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
  background-color: #007bff;
  color: black;
  margin: 10px 5px;
  padding: 5px 30px;
  border: none;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  background: transparent;
  border-radius: 25px;
  border: solid 1px #333;
  outline: none;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #0056b3;
  color: white;
  border-color: transparent;
}

.username-form {
  margin: 10px 10px;
}

.error-message {
  color: red;
  margin-top: 5px; /* 必要に応じて余白を調整 */
}
</style>
