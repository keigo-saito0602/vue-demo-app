<template>
  <div id="app">
    <AppHeader @navigate="handleNavigation" />

    <main class="main-content">
      <div v-if="currentPage === 'start'">
        <StartPage />
      </div>
      <div v-else-if="currentPage === 'prop-emit'">
        <PropEmitCurriculum />
      </div>
      <div v-else-if="currentPage === 'lifecycle'">
        <LifeCycle />
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/layout/DemoAppHeader.vue";
import AppFooter from "./components/layout/DemoAppFooter.vue";
import PropEmitCurriculum from "./pages/Chapter1PropEmit.vue";
import LifeCycle from "./pages/Chapter2LifeCycle.vue";
import StartPage from "./pages/StartPage.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    PropEmitCurriculum,
    LifeCycle,
    StartPage,
  },
  data() {
    return {
      currentPage: "start",
    };
  },
  methods: {
    handleNavigation(pageName) {
      this.currentPage = pageName;
    },
  },
};
</script>
