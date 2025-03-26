<template>
  <div>
    <label for="gender">{{ $t("app.select_gender") }}</label>
    <select v-model="selectedGender" id="gender">
      <option value="male">{{ $t("app.male") }}</option>
      <option value="female">{{ $t("app.female") }}</option>
      <option value="other">{{ $t("app.other") }}</option>
    </select>

    <!-- 性別の表示 -->
    <p v-if="selectedGender">{{ $t("app.selected_gender", { gender: $t('app.' + selectedGender) }) }}</p>
    <!-- 上記で、選択した性別を翻訳された日本語で表示 -->
  </div>
</template>

<script>
import { Component, Vue, Emit } from "vue-property-decorator";

@Component({ name: "UserGenderDisplay" })
export default class UserGenderDisplay extends Vue {
  selectedGender = ""; // 初期状態として性別を空に設定

  // 親コンポーネントに変更を通知する
  @Emit("update-gender")
  notifyParent() {
    return this.selectedGender;
  }
}
</script>

<style scoped>
</style>
