import Vue from "vue";
import App from "./App.vue";
import VueI18n from "vue-i18n";
import "./assets/styles/global.css"; // グローバルCSS

// 言語の設定
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "ja", // ← ここを「en」に切り替えれば英語になる
  fallbackLocale: "ja",
  messages: {
    ja: require("./locales/ja.json"),
    en: require("./locales/en.json"),
  },
});

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: (h) => h(App),
}).$mount("#app");
