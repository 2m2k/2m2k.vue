/* eslint-disable indent */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Meat from './views/Meat.vue'
import Vegetable from './views/Vegetable.vue'
import Sweets from './views/Sweets.vue'
import Snacks from './views/Snacks.vue'
import Additions from './views/Additions.vue'
import Contact from './views/Contact.vue'
import Faszerowanapaprykapage from './recipes-page/Faszerowana-papryka-page.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dania-miesne',
      name: 'meat',
      component: Meat
    },
    {
      path: '/dania-wegetarianskie',
      name: 'vegetable',
      component: Vegetable
    },
    {
      path: '/slodkosci',
      name: 'sweets',
      component: Sweets
    },
    {
      path: '/przekaski',
      name: 'snacks',
      component: Snacks
    },
    {
      path: '/dodatki',
      name: 'additions',
      component: Additions
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: Contact
    },
    {
      path: '/faszerowana-papryka',
      name: 'faszerowana-papryka',
      component: Faszerowanapaprykapage
    }
  ]
})
