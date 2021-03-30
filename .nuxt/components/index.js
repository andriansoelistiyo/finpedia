export { default as Logo } from '../../components/Logo.vue'
export { default as BreadcrumbList } from '../../components/breadcrumbList/index.vue'
export { default as BreadcrumbListLayout } from '../../components/breadcrumbListLayout/index.vue'
export { default as CategoryGrid } from '../../components/categoryGrid/index.vue'
export { default as CategoryGridLayout } from '../../components/categoryGridLayout/index.vue'
export { default as CcGrid } from '../../components/ccGrid/ccGrid.vue'
export { default as CcGridLayout } from '../../components/ccGridLayout/index.vue'
export { default as FinpediaFooter } from '../../components/finpediaFooter/index.vue'
export { default as FinpediaHeader } from '../../components/finpediaHeader/index.vue'
export { default as LoanGrid } from '../../components/loanGrid/index.vue'
export { default as LoanGridLayout } from '../../components/loanGridLayout/index.vue'
export { default as LoanSimulation } from '../../components/loanSimulation/index.vue'
export { default as PartnerGrid } from '../../components/partnerGrid/index.vue'
export { default as PartnerGridLayout } from '../../components/partnerGridLayout/index.vue'
export { default as ProductCalcBunga } from '../../components/productCalcBunga/index.vue'
export { default as ProductFeature } from '../../components/productFeature/index.vue'
export { default as ProductFeatureLayout } from '../../components/productFeatureLayout/index.vue'
export { default as ProductImage } from '../../components/productImage/index.vue'
export { default as SlickCarousel } from '../../components/slickCarousel/index.vue'
export { default as TabsRound } from '../../components/tabsRound/index.vue'
export { default as TabsRoundLayout } from '../../components/tabsRoundLayout/index.vue'
export { default as ValueProposition } from '../../components/valueProposition/index.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyBreadcrumbList = import('../../components/breadcrumbList/index.vue' /* webpackChunkName: "components/breadcrumb-list" */).then(c => wrapFunctional(c.default || c))
export const LazyBreadcrumbListLayout = import('../../components/breadcrumbListLayout/index.vue' /* webpackChunkName: "components/breadcrumb-list-layout" */).then(c => wrapFunctional(c.default || c))
export const LazyCategoryGrid = import('../../components/categoryGrid/index.vue' /* webpackChunkName: "components/category-grid" */).then(c => wrapFunctional(c.default || c))
export const LazyCategoryGridLayout = import('../../components/categoryGridLayout/index.vue' /* webpackChunkName: "components/category-grid-layout" */).then(c => wrapFunctional(c.default || c))
export const LazyCcGrid = import('../../components/ccGrid/ccGrid.vue' /* webpackChunkName: "components/cc-grid" */).then(c => wrapFunctional(c.default || c))
export const LazyCcGridLayout = import('../../components/ccGridLayout/index.vue' /* webpackChunkName: "components/cc-grid-layout" */).then(c => wrapFunctional(c.default || c))
export const LazyFinpediaFooter = import('../../components/finpediaFooter/index.vue' /* webpackChunkName: "components/finpedia-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyFinpediaHeader = import('../../components/finpediaHeader/index.vue' /* webpackChunkName: "components/finpedia-header" */).then(c => wrapFunctional(c.default || c))
export const LazyLoanGrid = import('../../components/loanGrid/index.vue' /* webpackChunkName: "components/loan-grid" */).then(c => wrapFunctional(c.default || c))
export const LazyLoanGridLayout = import('../../components/loanGridLayout/index.vue' /* webpackChunkName: "components/loan-grid-layout" */).then(c => wrapFunctional(c.default || c))
export const LazyLoanSimulation = import('../../components/loanSimulation/index.vue' /* webpackChunkName: "components/loan-simulation" */).then(c => wrapFunctional(c.default || c))
export const LazyPartnerGrid = import('../../components/partnerGrid/index.vue' /* webpackChunkName: "components/partner-grid" */).then(c => wrapFunctional(c.default || c))
export const LazyPartnerGridLayout = import('../../components/partnerGridLayout/index.vue' /* webpackChunkName: "components/partner-grid-layout" */).then(c => wrapFunctional(c.default || c))
export const LazyProductCalcBunga = import('../../components/productCalcBunga/index.vue' /* webpackChunkName: "components/product-calc-bunga" */).then(c => wrapFunctional(c.default || c))
export const LazyProductFeature = import('../../components/productFeature/index.vue' /* webpackChunkName: "components/product-feature" */).then(c => wrapFunctional(c.default || c))
export const LazyProductFeatureLayout = import('../../components/productFeatureLayout/index.vue' /* webpackChunkName: "components/product-feature-layout" */).then(c => wrapFunctional(c.default || c))
export const LazyProductImage = import('../../components/productImage/index.vue' /* webpackChunkName: "components/product-image" */).then(c => wrapFunctional(c.default || c))
export const LazySlickCarousel = import('../../components/slickCarousel/index.vue' /* webpackChunkName: "components/slick-carousel" */).then(c => wrapFunctional(c.default || c))
export const LazyTabsRound = import('../../components/tabsRound/index.vue' /* webpackChunkName: "components/tabs-round" */).then(c => wrapFunctional(c.default || c))
export const LazyTabsRoundLayout = import('../../components/tabsRoundLayout/index.vue' /* webpackChunkName: "components/tabs-round-layout" */).then(c => wrapFunctional(c.default || c))
export const LazyValueProposition = import('../../components/valueProposition/index.vue' /* webpackChunkName: "components/value-proposition" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
export function wrapFunctional(options) {
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
