<template>
  <div>
    <div
      class="d-flex align-center justify-center confirm-tag"
      v-bind:style="{ backgroundColor: statusColor }"
    >
      <v-icon color="white" dense class="mr-2">{{ statusIcon }}</v-icon>
      <h4>{{ statusText }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "class-status-tag",
  props: {
    status: {
      default: "confirmed",
      type: String
    },
  },
  data() {
    return {
      statusData: {
        confirmed: {
          icon: "mdi-bookmark-check",
          backgroundColor: "#04B904",
          text: "Confirmada"
        },
        canceled: {
          icon: "mdi-close-circle",
          backgroundColor: "#F44336",
          text: "Cancelada"
        },
        pending: {
          icon: "mdi-exclamation-thick",
          backgroundColor: "#FFC107",
          text: "Pendente"
        },
        finished: {
          icon: "mdi-notebook-check-outline",
          backgroundColor: "#607D8B",
          text: "Finalizada"
        },
      }
    };
  },
  mounted: () => {
    // console.log(this.status);
  },
  computed: {
    statusIcon: function() {
      return this.statusData[this.status].icon;
    },
    statusColor: function() {
      return this.statusData[this.status].backgroundColor;
    },
    statusText: function() {
      return this.statusData[this.status].text;
    },
  }
};
</script>

<style scoped>
.confirm-tag {
  height: 45px;
  width: 150px;
  color: white;
  vertical-align: middle;  
  padding: 15px;
  border-radius: 10px;  
}
</style>