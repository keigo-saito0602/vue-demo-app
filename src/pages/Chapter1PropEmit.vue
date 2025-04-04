<template>
  <v-container class="py-6">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <!-- タイトル -->
        <h1 class="text-h5 font-weight-bold text-primary text-center mb-6">
          Prop Emit
        </h1>

        <!-- 名前入力 -->
        <v-card class="pa-4 mb-6" elevation="1">
          <UserNameInput @username-submitted="onUsernameSubmitted" />
          <UserNameDisplay :username="username" :isSubscribed="isSubscribed" />
        </v-card>
        <!-- 性別選択 -->
        <v-card class="pa-4 mb-6" elevation="1">
          <UserGenderDisplay @update-gender="onGenderUpdated" />
        </v-card>

        <!-- 社員コード入力 -->
        <v-card class="pa-4" elevation="1">
          <EmployeeCodeInput
            @employee-code-submitted="onEmployeeCodeSubmitted"
          />
          <EmployeeCodeDisplay
            :employeeCode="employeeCode"
            :isSubscribed="isEmployeeSubscribed"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserNameInput from "@/components/project/Chapter1PropEmit/UserNameInput.vue";
import UserNameDisplay from "@/components/project/Chapter1PropEmit/UserNameDisplay.vue";
import UserGenderDisplay from "@/components/project/Chapter1PropEmit/UserGenderDisplay.vue";
import EmployeeCodeInput from "@/components/project/Chapter1PropEmit/EmployeeCodeInput.vue";
import EmployeeCodeDisplay from "@/components/project/Chapter1PropEmit/EmployeeCodeDisplay.vue";

@Component({
  components: {
    UserNameInput,
    UserNameDisplay,
    UserGenderDisplay,
    EmployeeCodeInput,
    EmployeeCodeDisplay,
  },
})
export default class Chapter1PropEmit extends Vue {
  username = "";
  isSubscribed = false;
  employeeCode = "";
  isEmployeeSubscribed = false;
  gender = "";

  onUsernameSubmitted(username: string, isSubscribed: boolean): void {
    this.username = username;
    this.isSubscribed = isSubscribed;
  }

  onEmployeeCodeSubmitted(employeeCode: string, isSubscribed: boolean): void {
    this.employeeCode = employeeCode;
    this.isEmployeeSubscribed = isSubscribed;
  }

  onGenderUpdated(gender: string): void {
    this.gender = gender;
  }
}
</script>
