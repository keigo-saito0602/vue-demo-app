<template>
  <div>
    <label for="gender">{{ $t("app.prop_emit.user.select_gender") }}</label>
    <select v-model="selectedGender" id="gender">
      <option value="male">{{ $t("app.prop_emit.user.gender.male") }}</option>
      <option value="female">
        {{ $t("app.prop_emit.user.gender.female") }}
      </option>
      <option value="other">{{ $t("app.prop_emit.user.gender.other") }}</option>
    </select>

    <p v-if="selectedGender">
      {{
        $t("app.prop_emit.user.selected_gender", {
          gender: $t("app.prop_emit.user.gender." + selectedGender),
        })
      }}
    </p>
  </div>
</template>

<script>
import { Component, Vue, Emit } from "vue-property-decorator";

@Component({ name: "UserGenderDisplay" })
export default class UserGenderDisplay extends Vue {
  selectedGender = "";

  @Emit("update-gender")
  notifyParent() {
    return this.selectedGender;
  }
}
</script>

<style scoped></style>
