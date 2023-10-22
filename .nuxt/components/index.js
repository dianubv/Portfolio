export const VAbout = () => import('../../components/V-About.vue' /* webpackChunkName: "components/v-about" */).then(c => wrapFunctional(c.default || c))
export const VContact = () => import('../../components/V-Contact.vue' /* webpackChunkName: "components/v-contact" */).then(c => wrapFunctional(c.default || c))
export const VFooterSocialLink = () => import('../../components/V-Footer-Social-Link.vue' /* webpackChunkName: "components/v-footer-social-link" */).then(c => wrapFunctional(c.default || c))
export const VFooter = () => import('../../components/V-Footer.vue' /* webpackChunkName: "components/v-footer" */).then(c => wrapFunctional(c.default || c))
export const VH2 = () => import('../../components/V-H2.vue' /* webpackChunkName: "components/v-h2" */).then(c => wrapFunctional(c.default || c))
export const VHeaderBackground = () => import('../../components/V-Header-Background.vue' /* webpackChunkName: "components/v-header-background" */).then(c => wrapFunctional(c.default || c))
export const VHeader = () => import('../../components/V-Header.vue' /* webpackChunkName: "components/v-header" */).then(c => wrapFunctional(c.default || c))
export const VLoader = () => import('../../components/V-Loader.vue' /* webpackChunkName: "components/v-loader" */).then(c => wrapFunctional(c.default || c))
export const VMenu = () => import('../../components/V-Menu.vue' /* webpackChunkName: "components/v-menu" */).then(c => wrapFunctional(c.default || c))
export const VNavbar = () => import('../../components/V-Navbar.vue' /* webpackChunkName: "components/v-navbar" */).then(c => wrapFunctional(c.default || c))
export const VPointer = () => import('../../components/V-Pointer.vue' /* webpackChunkName: "components/v-pointer" */).then(c => wrapFunctional(c.default || c))
export const VScrollDown = () => import('../../components/V-Scroll-Down.vue' /* webpackChunkName: "components/v-scroll-down" */).then(c => wrapFunctional(c.default || c))
export const VWorkItem = () => import('../../components/V-Work-Item.vue' /* webpackChunkName: "components/v-work-item" */).then(c => wrapFunctional(c.default || c))
export const VWork = () => import('../../components/V-Work.vue' /* webpackChunkName: "components/v-work" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
