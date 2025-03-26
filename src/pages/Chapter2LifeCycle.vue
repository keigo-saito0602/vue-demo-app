<template>
  <div>
    <h1>未実装</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      isSubscribed: false,
      employeeCode: "",
      gender: "",
    };
  },
  methods: {
    onUsernameSubmitted(username, isSubscribed) {
      this.username = username;
      this.isSubscribed = isSubscribed;
    },
    onEmployeeCodeSubmitted(employeeCode) {
      this.employeeCode = employeeCode;
    },
    onGenderUpdated(gender) {
      this.gender = gender;
    },
  },
};
</script>
