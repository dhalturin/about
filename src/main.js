import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueCalendarHeatmap from 'vue3-calendar-heatmap'
import VueGtag from 'vue-gtag'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
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
