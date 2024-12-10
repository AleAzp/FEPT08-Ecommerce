import { createWebHashHistory, createRouter } from 'vue-router'

import Products from './vistas/Products.vue'
import Cart from './vistas/Cart.vue'
import NotFound from './vistas/NotFound.vue'
import User from './vistas/User.vue'
import AllProducts from './vistas/AllProducts.vue'
import Jewelry from './vistas/Jewelry.vue'
import MenCothing from './vistas/MenCothing.vue'
import WomanClothing from './vistas/WomanClothing.vue'

const routes = [
    {   path: "/",
        redirect: "/products/all",
        name: "Products",
        component: Products,
        children: [
            {   path: "/products/all",
                name: "All Products",
                component: AllProducts},
            {   path: "/products/jewelry",
                name: "Jewelry",
                component: Jewelry},
            {   path: "/products/menclothing",
                name: "Men's Clothing",
                component: MenCothing},
            {   path: "/products/womanclothing",
                name: "WomanClorhing",
                component: WomanClothing}]},
    {   path: "/user",
        name: "User",
        component: User},
    {   path: "/:path(.*)",
        name: "Not Found",
        component: NotFound},
    {   path: "/cart",
        name: "Cart",
        component: Cart},

    
    
]


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router