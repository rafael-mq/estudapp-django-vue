<template>
  <div class="text-center">
    <!-- SIDE MENU -->
    <!-- <side-nav-student /> -->
    <h1>Student Home</h1>

    <v-tabs
      v-model="tab"
      background-color="white"
    >
    <v-tabs-slider></v-tabs-slider>

    <v-tab>
      Detalhes
    </v-tab>
    <v-tab>
      Calendário
    </v-tab>

    <v-tab-item>
      <class-list />
    </v-tab-item>
    <v-tab-item>
      <class-calendar />
    </v-tab-item>

    </v-tabs>

  </div>
</template>

<script>
import ClassList from "../components/content/student-home/ClassList"
import ClassCalendar from '../components/content/student-home/ClassCalendar.vue';


export default {
  name: "StudentHome",
  components: {
    ClassList,
    ClassCalendar
  },
  data: () => {
    return {
    }
  }
};
</script>

<style scoped>
</style>