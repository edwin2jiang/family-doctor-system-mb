import Home from '../views/Home.vue'

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        alias: '/home'
    },
    {
        path: '/Resident',
        name: 'Resident',
        component: () => import('../views/Resident.vue')
    },
    {
        path: '/Message',
        name: 'Message',
        component: () => import('../views/Message.vue')
    },
    {
        path: '/Profile',
        name: 'Profile',
        component: () => import('../views/Profile.vue')
    }
]