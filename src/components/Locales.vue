<script setup>
import { useI18n } from 'vue-i18n'
import en from './icons/IconLocaleEn.vue'
import ru from './icons/IconLocaleRu.vue'

const { locale } = useI18n({ useScope: "global" })

const localeIcons = {
  en,
  ru,
}

const setLocale = (key) => {
  console.log(key)
  localStorage.setItem('locale', key)

  locale.value = key
}

</script>

<template lang="pug">
div.locale
  component(
    v-for="locale in $i18n.availableLocales"
    :class="{ active : (locale === $i18n.locale) }"
    :is='localeIcons[locale]'
    @click="setLocale(locale)"
  )
</template>

<style scoped lang="scss">
.locale {
  position: absolute;
  right: 0;
  top: 0;
  min-width: 150px;
  min-height: 80px;
  z-index: 1;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div {
    transform: scale(.7);
    cursor: pointer;

    &.active {
      transform: scale(1);
    }
  }
}
</style>
