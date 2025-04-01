<template>
  <v-container class="py-6">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <h1 class="text-h5 font-weight-bold text-primary text-center mb-6">
          {{ $t("app.lifeCycle.title") }}
        </h1>
        <v-card class="pa-4 mb-6" elevation="1">
          <IndexComponent />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import IndexComponent from "@/components/project/Chapter2LifeCycle/IndexComponent.vue";

@Component({
  components: {
    IndexComponent,
  },
})
export default class Chapter2LifeCycle extends Vue {}
</script>
