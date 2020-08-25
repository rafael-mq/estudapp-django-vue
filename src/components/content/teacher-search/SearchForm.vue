<template>
  <div class="d-flex pt-2">
    <!-- input matéria -->
    <!-- <v-text-field class="px-2" hide-details="auto" solo label="Matéria">
      <template v-slot:prepend-inner>
        <v-btn icon x-small class="px-0">
          <v-icon>mdi-book-open-variant</v-icon>
        </v-btn>
      </template>
    </v-text-field> -->
    <v-autocomplete
      solo
      clearable
      label="Matéria"
      :items="subjects"
      prepend-inner-icon="mdi-book-open-variant"
    >
    </v-autocomplete>
    <v-text-field class="px-2" hide-details="auto" solo label="Local">
      <template v-slot:prepend-inner>
        <v-btn icon x-small class="px-0">
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </template>
    </v-text-field>
    <!-- btn search -->
    <v-btn color="indigo" class="white--text" height="48">Procurar</v-btn>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  data: function() {
    return {
      subjects: [
        { text: "Matemática", value: "1", disabled: false },
        { text: "Física", value: "2", disabled: false },
        { text: "Química", value: "3", disabled: false },
        { text: "Biologia", value: "4", disabled: false },
        { text: "Português", value: "5", disabled: false },
        { text: "Redação", value: "6", disabled: false },
        { text: "História", value: "7", disabled: false },
        { text: "Geografia", value: "8", disabled: false }
      ]
    };
  }
};
</script>

<style></style>
