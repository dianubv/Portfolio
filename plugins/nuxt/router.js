import { createRouter, createWebHistory } from 'vue-router'

import Index from '../pages/index.vue';
/* import Brg from '../pages/works/brg.vue';
import HeatingPad from '../pages/works/heating-pad.vue'; */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Index },
    { path: '/works/breathing-garment', component: () => import('../pages/works/brg.vue') },
    { path: '/works/heating-pad', component: () => import('../pages/works/heating-pad.vue') }
  ]
})

export default router
