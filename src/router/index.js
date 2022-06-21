import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminLogin from '@/views/AdminloginView.vue'
import ListaBuses from '@/views/BusesView'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/buses',
        name: 'Mostrar',
        component: ListaBuses
    },
    {
        path: '/login',
        name: 'AdminLogin',
        component: AdminLogin
    }
    ,
    {
        path: '/nosotros',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router