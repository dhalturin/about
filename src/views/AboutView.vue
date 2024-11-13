<template lang="pug">
p {{ $t('about_1', { tools: 'Bash / Python / Jinja / Groovy / Golang / Vuejs' }) }}
p {{ $t('about_2') }}
</template>

<style scoped lang="scss">
@media (max-width: 1000px) {
  p {
    &:first-child {
      margin-top: 20px;
    }
  }
}
</style>
