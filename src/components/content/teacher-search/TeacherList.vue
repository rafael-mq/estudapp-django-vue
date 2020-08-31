<template>
  <div class="d-flex flex-column align-center">
    <v-card
      color="indigo lighten-5"
      v-for="item in teachers"
      :key="item.id"
      class="pa-3 ma-3 card-list"
    >
      <div class="d-flex flex-no-wrap">
        <div class="d-flex flex-column align-center">
          <v-avatar class="profile rounded" tile size="150">
            <v-img :src="item.avatar" alt="123"></v-img>
            <!-- <span v-if="item.avatar">
            </span>-->
            <!-- <span v-else class="white--text headline">{{ initials(item) }}</span> -->
          </v-avatar>

          <v-rating
            half-increments
            readonly
            small
            :empty-icon="ratingIcons.emptyIcon"
            :full-icon="ratingIcons.fullIcon"
            :half-icon="ratingIcons.halfIcon"
            v-model="item.rating"
          ></v-rating>
        </div>

        <div class="ml-3">

          <v-card-title>{{ item.firstName }}</v-card-title>

          <v-card-text>{{ item.description }}</v-card-text>

          <div class="d-flex justify-end flex-shrink-1">
            <v-btn>
              <div class="text-caption" >Saber Mais</div>
            </v-btn>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TeacherList",
  data: function() {
    return {
      ratingIcons: {
        emptyIcon: "mdi-heart-outline",
        fullIcon: "mdi-heart",
        halfIcon: "mdi-heart-half-full"
      },
      teachers: [
        {
          firstName: "Rafael",
          lastName: "Moreira Queiroz",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in tellus urna. Integer interdum iaculis feugiat. Vivamus venenatis libero ut.",
          avatar: "https://randomuser.me/api/portraits/men/75.jpg",
          id: "teacher1",
          rating: 4.8
        },
        {
          firstName: "Mirla",
          lastName: "Vieira",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in tellus urna. Integer interdum iaculis feugiat. Vivamus venenatis libero ut.",
          avatar: "https://randomuser.me/api/portraits/women/26.jpg",
          id: "teacher2",
          rating: 4.8
        },
        {
          firstName: "Paulo",
          lastName: "Silva",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in tellus urna. Integer interdum iaculis feugiat. Vivamus venenatis libero ut.",
          avatar: "https://randomuser.me/api/portraits/men/78.jpg",
          id: "teacher3",
          rating: 4.8
        }
      ]
    };
  },
  methods: {
    initials: teacher =>
      teacher.firstName[0].toUpperCase() +
      teacher.lastName
        .split(" ")
        .pop()[0]
        .toUpperCase()
  }
};
</script>

<style scoped>
.card-list { 
  max-width: 700px;;
}

</style>
