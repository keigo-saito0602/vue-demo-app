<template>
  <div id="app">
    <UserNameInput @username-submitted="onUsernameSubmitted" />
    <UsernameDisplay :username="username" />
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
    };
  },
  methods: {
    onUsernameSubmitted(username) {
      this.username = username;
    },
  },
};
</script>
