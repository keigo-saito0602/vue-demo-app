<template>
  <div id="app">
    <UserNameInput @username-submitted="onUsernameSubmitted" />
    <UsernameDisplay v-if="username" :username="username" />
    <SubscriptionDisplay :isSubscribed="isSubscribed" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserNameInput from "./components/UserNameInput.vue";
import UsernameDisplay from "./components/UsernameDisplay.vue";
import SubscriptionDisplay from "./components/SubscriptionDisplay.vue";

@Component({
  components: {
    UserNameInput,
    UsernameDisplay,
    SubscriptionDisplay,
  },
})
export default class App extends Vue {
  username: string = "";
  isSubscribed: boolean = false;

  onUsernameSubmitted(username: string, isSubscribed: boolean) {
    this.username = username;
    this.isSubscribed = isSubscribed;
  }
}
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
