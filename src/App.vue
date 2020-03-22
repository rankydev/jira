<template>
  <v-app class="blue lighten-5">
    <router-view></router-view>

    <div class="spinner" v-if="showSpinner">
      <div class="spinner-inner">
        <v-progress-circular
          size="100"
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
    </div>
  </v-app>
</template>

<script>
import EventBus from "./eventBus";

export default {
  data() {
    return {
      showSpinner: false
    };
  },
  mounted() {
    EventBus.$on("CALL_IN_PROGRESS", payload => {
      this.showSpinner = payload;
    });
  }
};
</script>

<style lang="scss">
.spinner {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  opacity: 0.95;
}

.spinner-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
