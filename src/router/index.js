/*
 * @Author: jiangruohui
 * @Date: 2021-10-08 14:34:13
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-14 16:31:56
 * @Description:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'FormDemo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue')
  },
  {
    path: '/checkbox',
    name: 'CheckboxDemo',
    component: () => import('../views/Checkbox.vue')
  },
  {
    path: '/radio',
    name: 'RadioDemo',
    component: () => import('../views/Radio.vue')
  },
  {
    path: '/display',
    name: 'DisplayDemo',
    component: () => import('../views/Display.vue')
  },
  {
    path: '/alert',
    name: 'AlertDemo',
    component: () => import('../views/Alert.vue')
  },
  {
    path: '/table-render',
    name: 'TableRenderDemo',
    component: () => import('../views/TableRender.vue')
  },
  {
    path: '/table-slot',
    name: 'TableSlotDemo',
    component: () => import('../views/TableSlot.vue')
  },
  {
    path: '/tree',
    name: 'TreeDemo',
    component: () => import('../views/Tree.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
