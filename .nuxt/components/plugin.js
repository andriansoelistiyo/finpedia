import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  CategoryGrid: () => import('../../components/categoryGrid/index.vue' /* webpackChunkName: "components/category-grid" */).then(c => wrapFunctional(c.default || c)),
  BreadcrumbList: () => import('../../components/breadcrumbList/index.vue' /* webpackChunkName: "components/breadcrumb-list" */).then(c => wrapFunctional(c.default || c)),
  CategoryGridLayout: () => import('../../components/categoryGridLayout/index.vue' /* webpackChunkName: "components/category-grid-layout" */).then(c => wrapFunctional(c.default || c)),
  BreadcrumbListLayout: () => import('../../components/breadcrumbListLayout/index.vue' /* webpackChunkName: "components/breadcrumb-list-layout" */).then(c => wrapFunctional(c.default || c)),
  CcGrid: () => import('../../components/ccGrid/ccGrid.vue' /* webpackChunkName: "components/cc-grid" */).then(c => wrapFunctional(c.default || c)),
  CcGridLayout: () => import('../../components/ccGridLayout/index.vue' /* webpackChunkName: "components/cc-grid-layout" */).then(c => wrapFunctional(c.default || c)),
  FinpediaFooter: () => import('../../components/finpediaFooter/index.vue' /* webpackChunkName: "components/finpedia-footer" */).then(c => wrapFunctional(c.default || c)),
  FinpediaHeader: () => import('../../components/finpediaHeader/index.vue' /* webpackChunkName: "components/finpedia-header" */).then(c => wrapFunctional(c.default || c)),
  LoanGrid: () => import('../../components/loanGrid/index.vue' /* webpackChunkName: "components/loan-grid" */).then(c => wrapFunctional(c.default || c)),
  LoanGridLayout: () => import('../../components/loanGridLayout/index.vue' /* webpackChunkName: "components/loan-grid-layout" */).then(c => wrapFunctional(c.default || c)),
  LoanSimulation: () => import('../../components/loanSimulation/index.vue' /* webpackChunkName: "components/loan-simulation" */).then(c => wrapFunctional(c.default || c)),
  PartnerGrid: () => import('../../components/partnerGrid/index.vue' /* webpackChunkName: "components/partner-grid" */).then(c => wrapFunctional(c.default || c)),
  PartnerGridLayout: () => import('../../components/partnerGridLayout/index.vue' /* webpackChunkName: "components/partner-grid-layout" */).then(c => wrapFunctional(c.default || c)),
  HeroImage: () => import('../../components/heroImage/index.vue' /* webpackChunkName: "components/hero-image" */).then(c => wrapFunctional(c.default || c)),
  LoanGridMultiline: () => import('../../components/loanGridMultiline/index.vue' /* webpackChunkName: "components/loan-grid-multiline" */).then(c => wrapFunctional(c.default || c)),
  ProductCalcBunga: () => import('../../components/productCalcBunga/index.vue' /* webpackChunkName: "components/product-calc-bunga" */).then(c => wrapFunctional(c.default || c)),
  ProductImage: () => import('../../components/productImage/index.vue' /* webpackChunkName: "components/product-image" */).then(c => wrapFunctional(c.default || c)),
  ProductFeature: () => import('../../components/productFeature/index.vue' /* webpackChunkName: "components/product-feature" */).then(c => wrapFunctional(c.default || c)),
  ProductFeatureLayout: () => import('../../components/productFeatureLayout/index.vue' /* webpackChunkName: "components/product-feature-layout" */).then(c => wrapFunctional(c.default || c)),
  TabsRound: () => import('../../components/tabsRound/index.vue' /* webpackChunkName: "components/tabs-round" */).then(c => wrapFunctional(c.default || c)),
  TabsRoundLayout: () => import('../../components/tabsRoundLayout/index.vue' /* webpackChunkName: "components/tabs-round-layout" */).then(c => wrapFunctional(c.default || c)),
  ValueProposition: () => import('../../components/valueProposition/index.vue' /* webpackChunkName: "components/value-proposition" */).then(c => wrapFunctional(c.default || c)),
  SlickCarousel: () => import('../../components/slickCarousel/index.vue' /* webpackChunkName: "components/slick-carousel" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
