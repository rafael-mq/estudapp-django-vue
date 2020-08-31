<template>
  <div>
    <v-app-bar
      color="indigo darken-1"
      app
      flat
      dark
      clipped-left
    >
      <template v-if="true">
        <v-app-bar-nav-icon
          @click="menuBtnClick"
        ></v-app-bar-nav-icon>
        <!-- <v-spacer></v-spacer> -->
      </template>

      <v-toolbar-title class="display-2 font-weight-bold">
        {{ appTitle }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        elevation="0"
        color="indigo darken-1"
        class="hidden-sm-and-down ml-4"
        to="/about"
        >{{ items.aboutLink.title }}</v-btn
      >
      <v-btn
        elevation="0"
        color="indigo darken-1"
        class="hidden-sm-and-down ml-4"
        :disabled="logged"
        >{{ items.loginLink.title }}</v-btn
      >
      <v-btn
        color="indigo lighten-2"
        class="hidden-sm-and-down ml-4"
        :disabled="logged"
        >{{ items.registerLink.title }}</v-btn
      >
    </v-app-bar>

    <!-- <side-nav-student /> -->
    
  </div>

</template>

<script>
import { mapState } from "vuex";
// import SideNavStudent from "./SideNavStudent";
import { DrawerBus } from "./drawerBus";

export default {
  name: "navigation",
  // components: { SideNavStudent },
  data() {
    return {
      appTitle: "Estud",
      items: {
        loginLink: {
          title: "Login"
        },
        registerLink: {
          title: "Cadastre-se"
        },
        aboutLink: {
          title: "Sobre",
          link: "/about"
        }
      }
    };
  },
  computed: {
    ...mapState({
      logged: state => state.session.logged
    })
  },
  methods: {
    menuBtnClick() {
      DrawerBus.$emit("menu-click");
    }
  }
};
</script>

<style scoped></style>
