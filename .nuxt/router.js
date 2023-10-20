import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _75f4a298 = () => interopDefault(import('../pages/works/brg.vue' /* webpackChunkName: "pages/works/brg" */))
const _5162f956 = () => interopDefault(import('../pages/works/heating-pad.vue' /* webpackChunkName: "pages/works/heating-pad" */))
const _32feed1a = () => interopDefault(import('../pages/works/workPage.vue' /* webpackChunkName: "pages/works/workPage" */))
const _9007b308 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/home/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/works/brg",
    component: _75f4a298,
    name: "works-brg"
  }, {
    path: "/works/heating-pad",
    component: _5162f956,
    name: "works-heating-pad"
  }, {
    path: "/works/workPage",
    component: _32feed1a,
    name: "works-workPage"
  }, {
    path: "/",
    component: _9007b308,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
