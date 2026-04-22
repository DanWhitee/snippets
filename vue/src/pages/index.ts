import { createMemoryHistory, createRouter, type RouteRecordRaw } from 'vue-router'

import PHome from './home/ui/Index.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: PHome },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})