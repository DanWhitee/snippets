import './assets/main.css'

import { createApp } from 'vue'
import App from './index.vue'
import { router } from '../pages/index'

const app = createApp(App)

app.use(router)

app.mount('#app')
