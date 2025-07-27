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
  localStorage.setItem('locale', key)

  locale.value = key
}

</script>

<template lang="pug">
div(class="locale no-print")
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
  min-height: 80px;
  min-width: 150px;
  right: 0;
  top: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  div {
    transform: scale(.7);
    cursor: pointer;

    &.active {
      transform: scale(1);
    }
  }
}

@media (max-width: 1000px) {
  .locale {
    flex-direction: column;
    min-height: 150px;
    min-width: 80px;
  }
}
</style>
