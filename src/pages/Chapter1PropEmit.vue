<template>
  <div class="page-container">
    <h1 class="page-title">Prop Emit</h1>

    <div class="card-container">
      <div class="form-card">
        <UserNameInput @username-submitted="onUsernameSubmitted" />
        <UserNameDisplay :username="username" :is-subscribed="isSubscribed" />
      </div>

      <div class="form-card">
        <UserGenderDisplay @update-gender="onGenderUpdated" />
      </div>

      <div class="form-card">
        <EmployeeCodeInput @employee-code-submitted="onEmployeeCodeSubmitted" />
        <EmployeeCodeDisplay
          :employeeCode="employeeCode"
          :isSubscribed="isSubscribed"
        />
      </div>
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
.page-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 16px;
}

.page-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 32px;
  color: var(--vue-dark);
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: flex-start;
}

.form-card {
  flex: 1 1 45%;
  min-width: 300px;
  background-color: var(--white);
  border: 1px solid var(--vue-light-bg);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (max-width: 768px) {
  .form-card {
    flex: 1 1 100%;
  }
}
</style>
