import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: { iconfont: "mdi" },
    theme: {
      themes: {
        light: {
          primary: "#3f51b5",
          secondary: "#03a9f4",
          accent: "#009688",
          error: "#f44336",
          warning: "#ffc107",
          info: "#795548",
          success: "#4caf50"
        }
      }
    }
  });
  
