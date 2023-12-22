<script setup>
import CV from '../components/CV.vue'
</script>

<template lang="pug">
div.cv
  CV
</template>

<style scoped>
.cv {
  max-height: 80vh;
  margin: 20px 0;
}

@media (min-width: 1100px) {
  .cv {
    overflow: scroll;
  }
}
</style>
