<template>
  <div class="content">
    <center>
      <h1 class="indigo--text">Encontre um professor próximo a você</h1>
    </center>
    
    <SearchForm />

    <TeacherList/>
  </div>
</template>

<script>
import SearchForm from "../components/content/teacher-search/SearchForm";
import TeacherList from "../components/content/teacher-search/TeacherList";
export default {
  name: "TeacherSearch",
  components: {
    SearchForm,
    TeacherList
  }
};
</script>

<style scoped>
  .content {
    width: 90%;
    margin: 0 auto;
  }
</style>
