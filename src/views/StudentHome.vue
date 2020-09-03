<template>
  <div class="text-center">
    <v-container>
      <v-tabs v-model="tab" class="mt-3" centered>
        <v-tabs-slider></v-tabs-slider>

        <v-tab>Detalhes</v-tab>
        <v-tab>Calendário</v-tab>

        <v-tab-item>
          <class-list />
        </v-tab-item>
        <v-tab-item>
          <class-calendar class="mx-8"/>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </div>
</template>

<script>
import ClassList from "../components/content/student-home/ClassList";
import ClassCalendar from "../components/content/student-home/ClassCalendar.vue";

export default {
  name: "StudentHome",
  components: {
    ClassList,
    ClassCalendar
  },
  data: () => {
    return {
      tab: null,
    };
  }
};
</script>

<style scoped>
</style>