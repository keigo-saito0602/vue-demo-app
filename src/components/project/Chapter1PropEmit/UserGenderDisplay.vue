<template>
  <div class="d-flex flex-column gap-4">
    <v-select
      :items="genderOptions"
      v-model="selectedGender"
      :label="$t('app.prop_emit.user.select_gender')"
      item-text="label"
      item-value="value"
      outlined
      dense
      hide-details
      @change="notifyParent"
    />

    <p v-if="selectedGender" class="text-caption text-primary mt-2">
      {{
        $t("app.prop_emit.user.selected_gender", {
          gender: $t("app.prop_emit.user.gender." + selectedGender),
        })
      }}
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";

interface GenderOption {
  label: string;
  value: string;
}

@Component({ name: "UserGenderDisplay" })
export default class UserGenderDisplay extends Vue {
  selectedGender = "";

  get genderOptions(): GenderOption[] {
    return [
      {
        label: this.$t("app.prop_emit.user.gender.male") as string,
        value: "male",
      },
      {
        label: this.$t("app.prop_emit.user.gender.female") as string,
        value: "female",
      },
      {
        label: this.$t("app.prop_emit.user.gender.other") as string,
        value: "other",
      },
    ];
  }

  @Emit("update-gender")
  notifyParent(): string {
    return this.selectedGender;
  }
}
</script>
