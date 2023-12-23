<script setup>
import WrapperHeader from './components/WrapperHeader.vue'
import Locales from './components/Locales.vue'

const theme = {
  token: {
    colorPrimary: '#00b96b',
    fontFamily: "'Oswald', 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontSize: '10',
    fontWeightStrong: '300',
    colorLink: '#333',
    colorLinkActive: '#333',
    colorLinkHover: '#333',
  }
}

// console.log(this.$i18n)
</script>

<template lang="pug">
a-config-provider(:theme="theme")
  Locales

  a-row(:style="{ height: '100vh'}" justify="center")
    a-row(:style="{ maxWidth: '1280px', padding: '24px', maxHeight: '100vh' }" align="middle")
      a-col(:span="24" :xl="10")
        WrapperHeader

      a-col(:span="24" :xl="14" :style="{textAlign: 'justify'}")
        RouterView
</template>
