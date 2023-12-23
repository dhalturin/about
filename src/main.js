import './assets/main.scss'

import { createApp } from 'vue'
import { createI18n } from "vue-i18n"
import { createPinia } from 'pinia'
import VueCalendarHeatmap from 'vue3-calendar-heatmap'
import VueGtag from 'vue-gtag'

import App from './App.vue'
import router from './router'
import en from "./locales/en-US.json"
import ru from "./locales/ru-RU.json"

const i18n = createI18n({
    locale: localStorage.getItem('locale') || 'en',
    fallbackLocale: 'en',
    messages: { en, ru },
    legacy: false,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(VueCalendarHeatmap)
app.use(
    VueGtag,
    {
        appName: 'about me',
        pageTrackerScreenviewEnabled: true,
        config: { id: 'G-04BMYM0H2Q' },
    },
    router,
)

app.mount('#app')
