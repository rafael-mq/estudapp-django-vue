<template>
  <v-navigation-drawer
    app
    v-model="drawer"
    class="indigo lighten-1"
    dark
  >
    <v-app-bar color="indigo darken-1" flat>
      <template>
        <v-app-bar-nav-icon
          @click="toggleDrawer"
        ></v-app-bar-nav-icon>
      </template>

      <v-toolbar-title class="display-2 font-weight-bold">
        Estud
      </v-toolbar-title>
    </v-app-bar>
    <v-list>
      <v-subheader>
        <h2>Aluno</h2>
      </v-subheader>

      <v-list-item>
        <v-list-item-avatar size="80px">
          <v-img src="https://randomuser.me/api/portraits/men/1.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Peter Parker</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item to="/student-dash">
        <v-list-item-icon>
          <v-icon>mdi-book-open-variant</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Aulas</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/search-teacher">
        <v-list-item-icon>
          <v-icon>mdi-magnify</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Buscar Professor</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/settings">
        <v-list-item-icon>
          <v-icon>mdi-cog</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Configurações</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-exit-to-app</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Sair</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- ///////////////////////////////////////////////////////////////// -->
      <!-- <v-list-item>
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
      </span> -->
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
      default: true
    }
  },
  data() {
    return {
      appTitle: "Estud",
      drawer: true,
      items: {
        loginLink: {
          title: "Logout"
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
      console.log('oi');
      this.drawer = !this.drawer;
    },
    changeRoute(routeName) {
      return this.$router.push({ name: routeName });
    }
  }
};
</script>

<style scoped>
</style>
