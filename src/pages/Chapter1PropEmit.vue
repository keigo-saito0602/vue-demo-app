<template>
  <div class="form-grid">
    <div class="form-column">
      <UserNameInput @username-submitted="onUsernameSubmitted" />
      <UserNameDisplay :username="username" :is-subscribed="isSubscribed" />
    </div>

    <div class="form-column">
      <UserGenderDisplay @update-gender="onGenderUpdated" />
    </div>

    <div class="form-column">
      <EmployeeCodeInput @employee-code-submitted="onEmployeeCodeSubmitted" />
      <EmployeeCodeDisplay
        :employeeCode="employeeCode"
        :isSubscribed="isSubscribed"
      />
    </div>
  </div>
</template>

<script>
import UserNameInput from "../components/project/UserNameInput.vue";
import UserNameDisplay from "../components/project/UserNameDisplay.vue";
import EmployeeCodeInput from "../components/project/EmployeeCodeInput.vue";
import EmployeeCodeDisplay from "../components/project/EmployeeCodeDisplay.vue";
import UserGenderDisplay from "../components/project/UserGenderDisplay.vue";

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
      isSubscribed: false,
      employeeCode: "",
      termsOfUse: false,
      gender: "",
    };
  },
  methods: {
    onUsernameSubmitted(username, isSubscribed) {
      this.username = username;
      this.isSubscribed = isSubscribed;
    },
    onEmployeeCodeSubmitted(employeeCode, termsOfUse) {
      this.employeeCode = employeeCode;
      this.termsOfUse = termsOfUse;
    },
    onGenderUpdated(gender) {
      this.gender = gender;
    },
  },
};
</script>

<style scoped>
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  row-gap: 24px;
  align-items: start;
}

.form-column {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>
