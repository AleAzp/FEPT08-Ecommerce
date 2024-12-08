import { createWebHashHistory, createRouter } from 'vue-router'

import Products from './vistas/Products.vue'
import Cart from './vistas/Cart.vue'
import NotFound from './vistas/NotFound.vue'
import User from './vistas/User.vue'
import Help from './vistas/Help.vue'

const routes = [
    {   path: "/",
        name: "Products",
        component: Products},
    {   path: "/user",
        name: "User",
        component: User},
    {   path: "/:path(.*)",
        name: "Not Found",
        component: NotFound},
    {   path: "/cart",
        name: "Cart",
        component: Cart},
    {   path: "/help",
        name: "Help",
        component: Help},
    
]


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router