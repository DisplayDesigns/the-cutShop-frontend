import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    props: true
  },
  {
    path: "/materials/:slug",
    name: "materialsDetails",
    props: true,
    component: () =>
      import(/* webpackChunkName: "MaterialsDetails" */ "../views/MaterialsDetails.vue"),
  },
  {
    path: "/materials/:slug/:materialTypeSlug/orders",
    name: "materialOrder",
    props: true,
    component: () =>
      import(/* webpackChunkName: "MaterialOrder" */ "../views/MaterialOrder.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
