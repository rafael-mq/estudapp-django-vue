<template>
  <div>
    <v-container>
      <center>
        <h1 class="my-5 indigo--text">Encontre um professor próximo a você</h1>
      </center>

      <SearchForm class="mb-2" />

      <TeacherList/>
    </v-container>
  </div>
</template>

<script>
import SearchForm from "../components/content/teacher-search/SearchForm";
import TeacherList from "../components/content/teacher-search/TeacherList";
export default {
  name: "teacher-search",
  components: {
    SearchForm,
    TeacherList
  }
};
</script>

<style scoped>
</style>
