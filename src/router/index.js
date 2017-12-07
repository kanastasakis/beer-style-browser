import Vue from 'vue'
import Router from 'vue-router'
import Beer from '@/components/Beer'
import BeerStyleBrowser from '@/components/BeerStyleBrowser'
import HelpSection from '@/components/HelpSection'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: '/beer/',
  routes: [
    {
      path: '/browse',
      name: 'beer-style-browser',
      component: BeerStyleBrowser
    },
    {
      path: '/help',
      name: 'help-section',
      component: HelpSection
    },
    {
      path: '/',
      name: 'index',
      component: Beer
    },
    {
      path: '/*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
