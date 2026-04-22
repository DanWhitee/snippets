import './assets/main.css'

import { createApp } from 'vue'
import App from './Index.vue'
import { router } from '../pages/index'

const app = createApp(App)

app.use(router)

app.mount('#app')
