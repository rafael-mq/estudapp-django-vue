<template>
  <v-app>
    <!-- <v-app-bar app color="primary" dark></v-app-bar> -->
    <navigation />

    <side-nav v-if="logged"/>

    <v-main transition="slide-x-transition">
      <router-view></router-view>
    </v-main>

    <v-footer height="60" class="grey">
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Estud App</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from "./components/layout/navigation/Navigation";
import SideNav from "./components/layout/navigation/SideNav";
import { mapState } from "vuex";

export default {
  name: "App",

  components: {
    Navigation,
    SideNav
  },
  computed: {
    ...mapState({
      // logged: state => state.session.logged
      logged: () => true
    })
  }
};
</script>
