<template>
  <v-footer color="white" padless class="text-center">
    <v-col cols="12" class="py-4">
      <p class="mb-1">{{ $t("app.footer.title") }}</p>
      <a href="#" class="text-caption text--secondary">
        {{ $t("app.footer.link") }}
      </a>
    </v-col>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class AppFooter extends Vue {}
</script>
