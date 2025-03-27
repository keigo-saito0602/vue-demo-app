<template>
  <div class="chapter3-api">
    <h2>Chapter 3: GAS API連携</h2>

    <UserForm :user="formUser" @submit="handleSubmit" @clear="resetForm" />

    <UserList
      :users="users"
      @select="selectUser"
      @edit="editUser"
      @delete="removeUser"
    />

    <UserDetail :user="selectedUser" />
  </div>
</template>

<script>
import {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
} from "@/api/gasApi.js";

import UserForm from "@/components/project/Chapter3API/Create.vue";
import UserList from "@/components/project/Chapter3API/Index.vue";
import UserDetail from "@/components/project/Chapter3API/Details.vue";

export default {
  name: "Chapter3API",
  components: {
    UserForm,
    UserList,
    UserDetail,
  },
  data() {
    return {
      users: [],
      selectedUser: null,
      formUser: {
        id: "",
        name: "",
        gender: "",
        birth_date: "",
      },
    };
  },
  created() {
    this.loadUsers();
  },
  methods: {
    async loadUsers() {
      try {
        this.users = await fetchUsers();
      } catch (error) {
        console.error("ユーザー取得失敗:", error);
      }
    },
    async handleSubmit(user) {
      try {
        if (user.id) {
          await updateUser(user);
        } else {
          await createUser(user);
        }
        this.resetForm();
        await this.loadUsers();
      } catch (error) {
        console.error("保存失敗:", error);
      }
    },
    resetForm() {
      this.formUser = {
        id: "",
        name: "",
        gender: "",
        birth_date: "",
      };
    },
    editUser(user) {
      this.formUser = { ...user };
    },
    selectUser(user) {
      this.selectedUser = user;
    },
    async removeUser(id) {
      if (confirm("本当に削除しますか？")) {
        try {
          await deleteUser(id);
          await this.loadUsers();
          if (this.selectedUser && this.selectedUser.id === id) {
            this.selectedUser = null;
          }
        } catch (error) {
          console.error("削除失敗:", error);
        }
      }
    },
  },
};
</script>

<style scoped>
.chapter3-api {
  padding: 20px;
}
</style>
