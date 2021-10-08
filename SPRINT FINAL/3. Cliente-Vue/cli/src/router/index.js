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
    path: '/usuarios',
    name: 'Usuarios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Usuarios.vue')
  }
  ,
  {
    path: '/sesion',
    name: 'Sesion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sesion.vue')
  },
  {
    path: '/footer',
    name: 'Footer',
    component: () => import(/* webpackChunkName: "about" */ '../components/Footer.vue')
  },
  {
    path: '/header',
    name: 'Header',
    component: () => import(/* webpackChunkName: "about" */ '../components/Header.vue')
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Servicios.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  },
  {
    path: '/equipo',
    name: 'Equipo',
    component: () => import(/* webpackChunkName: "about" */ '../components/Equipo.vue')
  },
  {
    path: '/heladeria',
    name: 'Heladeria',
    component: () => import(/* webpackChunkName: "about" */ '../views/Heladeria.vue')
  },
  {
    path: '/hotdogs',
    name: 'Hotdogs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Hotdogs.vue')
  },
  {
    path: '/bebidas',
    name: 'Bebidas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Bebidas.vue')
  },
  {
    path: '/hierbabuena',
    name: 'Hierbabuena',
    component: () => import(/* webpackChunkName: "about" */ '../views/Hierbabuena.vue')
  },
  {
    path: '/empanadasmartica',
    name: 'Empanadasmartica',
    component: () => import(/* webpackChunkName: "about" */ '../views/Empanadasmartica.vue')
  },
  {
    path: '/licoreslegales',
    name: 'Licoreslegales',
    component: () => import(/* webpackChunkName: "about" */ '../views/Licoreslegales.vue')
  },
  {
    path: '/cafecultura',
    name: 'Cafecultura',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cafecultura.vue')
  },
  {
    path: '/comprar',
    name: 'Comprar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Comprar.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
