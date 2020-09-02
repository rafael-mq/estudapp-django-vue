<template>
  <div>
    <v-card class="ma-3">
      <v-expansion-panels>
        <v-expansion-panel v-for="item in classes" :key="item.id">
          <v-expansion-panel-header>
            <div class="d-flex align-center">
              <v-avatar size="80" max-width="80">
                <v-img :src="item.teacher.avatar" :alt="item.teacher.name"></v-img>
              </v-avatar>

              <v-divider vertical class="ml-8"/>

              <div class="ml-8 indigo--text text--accent-4">
                <h2>{{item.subject}}</h2>
                <h4 class="mt-4">{{ item.teacher.name }} - Hoje, 14hs</h4>
              </div>

              <v-spacer/>

              <class-status-tag :status="item.status" class="mr-8"></class-status-tag>
            </div>
          </v-expansion-panel-header>

          <v-expansion-panel-content>conteudo</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script>
import ClassStatusTag from './ClassStatusTag.vue';

export default {
  name: "class-list",
  components: {
    ClassStatusTag,
  },
  data() {
    return {
      classes: [
        {
          id: "1",
          subject: "Matemática",
          datetime: "Hoje, 14hs",
          status: "confirmed",
          teacher: {
            name: "Johnny B. Good",
            avatar: "https://randomuser.me/api/portraits/men/7.jpg"
          }
        },
        {
          id: "2",
          subject: "Redação",
          datetime: "Hoje, 14hs",
          status: "canceled",
          teacher: {
            name: "Riley Ben King",
            avatar: "https://randomuser.me/api/portraits/men/12.jpg"
          }
        },
        {
          id: "3",
          subject: "Física",
          datetime: "Hoje, 14hs",
          status: "pending",
          teacher: {
            name: "John Stewart",
            avatar: "https://randomuser.me/api/portraits/men/50.jpg"
          }
        },
        {
          id: "4",
          subject: "Matemática",
          datetime: "Hoje, 14hs",
          status: "finished",
          teacher: {
            name: "John Stewart",
            avatar: "https://randomuser.me/api/portraits/men/50.jpg"
          }
        },
        {
          id: "5",
          subject: "Matemática",
          datetime: "Hoje, 14hs",
          status: "confirmed",
          teacher: {
            name: "John Stewart",
            avatar: "https://randomuser.me/api/portraits/men/50.jpg"
          }
        },
      ]
    };
  },
};
</script>

<style scoped>
</style>