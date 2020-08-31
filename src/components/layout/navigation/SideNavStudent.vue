<template>
  <div>

    <!-- <v-navigation-drawer
      class="indigo lighten-1"
      dark
    > -->
      <v-list
        class="indigo lighten-1"
        max-width=300
        min-width=270
        nav
        dark
      >
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

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-book-open-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Aulas</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item href>
          <v-list-item-icon>
            <v-icon>mdi-magnify</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Buscar Professor</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Configurações</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    <!-- </v-navigation-drawer> -->
  </div>
</template>

<script>
export default {
  name: "side-nav-student"
};
</script>

<style scoped>
</style>