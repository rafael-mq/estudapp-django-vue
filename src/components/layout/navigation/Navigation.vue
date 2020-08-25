<template>
  <div>
    <v-app-bar app color="indigo darken-1" dark>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="menuBtnClick"
      ></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title class="display-2 font-weight-bold">
        {{ appTitle }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        elevation="0"
        color="indigo darken-1"
        class="hidden-sm-and-down ml-4"
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

    <side-nav :permanent="false" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import SideNav from "./SideNav";
import { DrawerBus } from "./drawerBus";

export default {
  name: "Navigation",
  components: { SideNav },
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
