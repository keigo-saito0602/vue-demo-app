import Vue from "vue";
import Vuetify from "vuetify/lib";
import { COLOR } from "@/constants/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: COLOR.PRIMARY,
        secondary: COLOR.DARK,
        error: COLOR.ERROR,
        background: COLOR.BACKGROUND,
      },
    },
  },
});
