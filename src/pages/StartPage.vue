<template>
  <div class="main-content">
    <v-card flat class="pa-8" elevation="8">
      <v-card-title class="text-h5 font-weight-bold justify-center mb-4">
        {{ $t("app.header.title") }}
      </v-card-title>

      <v-card-text class="text-center text-body-1 mb-6">
        {{ $t("app.header.explanation") }}
      </v-card-text>

      <v-list dense class="text-center">
        <v-list-item class="justify-center">
          <v-icon left color="primary">mdi-check</v-icon>
          {{ $t("app.header.prop_emit") }}
        </v-list-item>
        <v-list-item class="justify-center">
          <v-icon left color="primary">mdi-check</v-icon>
          {{ $t("app.header.life_cycle") }}
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class StartPage extends Vue {}
</script>
