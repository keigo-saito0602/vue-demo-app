<template>
  <div id="app">
    <UserNameInput @username-submitted="onUsernameSubmitted" />
    <UsernameDisplay :username="username" :is-subscribed="isSubscribed" />
  </div>
</template>

<script>
import UserNameInput from "./components/UserNameInput.vue";
import UsernameDisplay from "./components/UsernameDisplay.vue";

export default {
  components: {
    UserNameInput,
    UsernameDisplay,
  },
  data() {
    return {
      username: "",
      isSubscribed: false, // チェックボックスの初期状態
    };
  },
  methods: {
    onUsernameSubmitted(username, isSubscribed) {
      this.username = username;
      this.isSubscribed = isSubscribed; // チェックボックスの状態を更新
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
