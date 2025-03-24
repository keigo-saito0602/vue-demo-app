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
      <input type="checkbox" v-model="isSubscribed" /> {{ $t("checkbox.title")
      }}<br />
    </label>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "UserNameInput" })
export default class UserNameInput extends Vue {
  inputUsername = "";
  isSubscribed = false;

  submitUsername() {
    this.$emit("username-submitted", this.inputUsername, this.isSubscribed);
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
</style>
