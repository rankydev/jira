<template>
  <div>hello</div>
</template>

<script>
export default {
  name: "ProjectOverview",
  mounted() {
    this.fetchProjects();
  },
  methods: {
    fetchProjects() {
      // const url = "https://jira.towa-digital.com/rest/api/latest/project";
    }
  }
};
</script>
