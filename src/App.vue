<template>
  <div id="app">
    <UserNameInput @username-submitted="onUsernameSubmitted" />
    <UserNameDisplay :username="username" :is-subscribed="isSubscribed" />
    <EmployeeCodeInput @employee-code-submitted="onEmployeeCodeSubmitted" />
    <EmployeeCodeDisplay :employeeCode="employeeCode" />
    <UserGenderDisplay @update-gender="onGenderUpdated" /> 
  </div>
</template>

<script>
import UserNameInput from "./components/UserNameInput.vue";
import UserNameDisplay from "./components/UserNameDisplay.vue";
import EmployeeCodeInput from "./components/EmployeeCodeInput.vue";
import EmployeeCodeDisplay from "./components/EmployeeCodeDisplay.vue";
import UserGenderDisplay from "./components/UserGenderDisplay.vue";

export default {
  components: {
    UserNameInput,
    UserNameDisplay,
    EmployeeCodeInput,
    EmployeeCodeDisplay,
    UserGenderDisplay,
  },
  data() {
    return {
      username: "",
      isSubscribed: false, // チェックボックスの初期状態
      employeeCode: "", // 社員コードを追加
      gender: "", // 初期状態として性別を空に設定
    };
  },
  methods: {
    onUsernameSubmitted(username, isSubscribed) {
      this.username = username;
      this.isSubscribed = isSubscribed; // チェックボックスの状態を更新
      // gender は onGenderUpdated メソッドで更新される
    },
    onEmployeeCodeSubmitted(employeeCode) {
      this.employeeCode = employeeCode;
    },
    onGenderUpdated(gender) { // ここでgenderを更新する処理を追加
      this.gender = gender; // 性別を更新
    },
  },
};
</script>

<style>
/* Global style */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app {
  text-align: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
</style>
