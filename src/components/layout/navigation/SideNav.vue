<template>
  <v-navigation-drawer
    app
    v-model="drawer"
    class="indigo lighten-1"
    dark
    disable-resize-watcher
    :permanent="permanent"
  >
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="../../../assets/default-avatar.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ user.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item :key="items.loginLink.title" link>
          <v-list-item-content>
            <v-list-item-title>{{ items.loginLink.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :key="items.registerLink.title" link>
          <v-list-item-content>
            <v-list-item-title>{{
              items.registerLink.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :key="items.aboutLink.title" link>
          <v-list-item-content>
            <v-list-item-title>{{ items.aboutLink.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <span v-if="user.logged">
        <v-divider></v-divider>

        <v-list dense>
          <v-subheader>ALUNO</v-subheader>
          <v-list-item v-for="item in specificItems" :key="item.title" link>
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </span>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";
import { DrawerBus } from "./drawerBus";

export default {
  name: "side-nav",
  props: {
    permanent: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      appTitle: "Estud",
      drawer: false,
      items: {
        loginLink: {
          title: "Login"
        },
        registerLink: {
          title: "Cadastre-se"
        },
        aboutLink: {
          title: "Sobre"
        }
      },
      specificItems: [
        { title: "Busca", icon: "mdi-magnify" },
        { title: "Aulas", icon: "mdi-book-open-variant" }
      ]
    };
  },
  computed: {
    ...mapState({
      user: state => state.session.user
    })
  },
  mounted() {
    DrawerBus.$on("menu-click", this.toggleDrawer);
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
};
</script>

<style scoped></style>
