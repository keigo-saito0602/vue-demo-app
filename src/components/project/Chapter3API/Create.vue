<template>
  <form @submit.prevent="onSubmit">
    <input v-model="localUser.name" placeholder="名前" required />
    <select v-model="localUser.gender" required>
      <option disabled value="">性別を選択</option>
      <option>male</option>
      <option>female</option>
      <option>other</option>
    </select>
    <input
      v-model="localUser.birth_date"
      placeholder="生年月日 (YYYY-MM-DD)"
      required
    />
    <button type="submit">{{ localUser.id ? "更新" : "作成" }}</button>
    <button type="button" v-if="localUser.id" @click="clear">キャンセル</button>
  </form>
</template>

<script>
export default {
  name: "UserCreate",
  props: {
    user: Object,
  },
  data() {
    return {
      localUser: { ...this.user },
    };
  },
  watch: {
    user: {
      handler(newVal) {
        this.localUser = { ...newVal };
      },
      immediate: true,
    },
  },
  methods: {
    onSubmit() {
      this.$emit("submit", { ...this.localUser });
    },
    clear() {
      this.$emit("clear");
    },
  },
};
</script>
