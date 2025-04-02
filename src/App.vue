<template>
  <v-app>
    <AppHeader @navigate="handleNavigation" />

    <v-main>
      <div v-if="currentPage === 'start'">
        <StartPage />
      </div>
      <div v-else-if="currentPage === 'prop-emit'">
        <PropEmitCurriculum />
      </div>
      <div v-else-if="currentPage === 'lifecycle'">
        <LifeCycle />
      </div>
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AppHeader from "@/components/layout/DemoAppHeader.vue";
import AppFooter from "@/components/layout/DemoAppFooter.vue";
import PropEmitCurriculum from "@/pages/Chapter1PropEmit.vue";
import LifeCycle from "@/pages/Chapter2LifeCycle.vue";
import StartPage from "@/pages/StartPage.vue";

@Component({
  components: {
    AppHeader,
    AppFooter,
    PropEmitCurriculum,
    LifeCycle,
    StartPage,
  },
})
export default class App extends Vue {
  currentPage = "start";

  handleNavigation(pageName: string) {
    this.currentPage = pageName;
  }
}
</script>
