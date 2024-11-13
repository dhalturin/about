<script setup>
import Projects from '../components/Projects.vue'
</script>

<template lang="pug">
div.projects
  Projects
</template>

<style scoped>
.projects {
  max-height: 80vh;
  margin: 20px 0;
}

@media (min-width: 1024px) {
  .projects {
    overflow: scroll;
  }
}
</style>
