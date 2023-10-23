export { default as VAbout } from '../../components/V-About.vue'
export { default as VContact } from '../../components/V-Contact.vue'
export { default as VFooterSocialLink } from '../../components/V-Footer-Social-Link.vue'
export { default as VFooter } from '../../components/V-Footer.vue'
export { default as VH2 } from '../../components/V-H2.vue'
export { default as VHeaderBackground } from '../../components/V-Header-Background.vue'
export { default as VHeader } from '../../components/V-Header.vue'
export { default as VLoader } from '../../components/V-Loader.vue'
export { default as VMenu } from '../../components/V-Menu.vue'
export { default as VNavbar } from '../../components/V-Navbar.vue'
export { default as VPointer } from '../../components/V-Pointer.vue'
export { default as VScrollDown } from '../../components/V-Scroll-Down.vue'
export { default as VWorkItem } from '../../components/V-Work-Item.vue'
export { default as VWork } from '../../components/V-Work.vue'

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
