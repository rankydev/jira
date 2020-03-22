<template>
  <v-content>
    <h1 class="text-center pt-12">Dashboard</h1>

    <div class="projects">
      <project-overview />
    </div>
  </v-content>
</template>

<script>
import ProjectOverview from "../components/ProjectOverview";

export default {
  name: "Dashboard",
  components: {
    ProjectOverview
  },
  data() {
    return {};
  }
};
</script>
