import { createWebHashHistory, createRouter } from 'vue-router'

import Products from './vistas/Products.vue'
import Cart from './vistas/Cart.vue'
import NotFound from './vistas/NotFound.vue'
import User from './vistas/User.vue'
import AllProducts from './vistas/AllProducts.vue'
import Jewelery from './vistas/Jewelery.vue'
import MenCothing from './vistas/MenCothing.vue'
import WomanClothing from './vistas/WomanClothing.vue'
import Electronics from './vistas/Electronics.vue'
import Privacy from './vistas/Privacy.vue'
import Terms from './vistas/Terms.vue'
import About from './vistas/About.vue'
import SearchResults from './vistas/SearchResults.vue'

const routes = [
    {   path: "/",
        redirect: "/products/all",
        name: "Products",
        component: Products,
        children: [
            {   path: "/products/all",
                name: "All Products",
                component: AllProducts},
            {   path: "/products/jewelery",
                name: "Jewelery",
                component: Jewelery},
            {   path: "/products/menclothing",
                name: "Men's Clothing",
                component: MenCothing},
            {   path: "/products/electronics",
                name: "Elecronics",
                component: Electronics},
            {   path: "/products/womanclothing",
                name: "WomanClorhing",
                component: WomanClothing},
            {   path: "/products/searchresults",
                name: "SearchResults",
                component: SearchResults},
            ]},
    {   path: "/user",
        name: "User",
        component: User},
    {   path: "/:path(.*)",
        name: "Not Found",
        component: NotFound},
    {   path: "/cart",
        name: "Cart",
        component: Cart},
    {   path: "/about",
        name: "About",
        component: About},
    {   path: "/privacy-policy",
        name: "Privacy",
        component: Privacy},
    {   path: "/terms-conditions",
        name: "Terms",
        component: Terms},
    
    
]


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router