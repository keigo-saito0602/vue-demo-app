<template>
  <v-app-bar color="primary" dense dark app>
    <v-toolbar-title>{{ $t("app.start.title") }}</v-toolbar-title>
    <v-spacer />
    <div class="d-flex align-center ga-2">
      <v-btn
        v-for="item in navItems"
        :key="item.name"
        text
        color="white"
        @click="$emit('navigate', item.route)"
      >
        {{ $t(item.label) }}
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";

interface NavItem {
  name: string;
  label: string;
  route: string;
}

@Component
export default class AppHeader extends Vue {
  get navItems(): NavItem[] {
    return [
      { name: "home", label: "app.start.navigate.home", route: "start" },
      {
        name: "prop-emit",
        label: "app.start.navigate.prop_emit",
        route: "prop-emit",
      },
      {
        name: "lifecycle",
        label: "app.start.navigate.life_cycle",
        route: "lifecycle",
      },
    ];
  }

  @Emit("navigate")
  navigateTo(routeName: string): string {
    return routeName;
  }
}
</script>
