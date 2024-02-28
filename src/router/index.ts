import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Default',
        redirect: '/Application/Home'
    },
    {
        path: '/:pathMatch(.*)',
        name: '404',
        redirect: '/Empty'
    },
    {
        path: '/Empty',
        name: 'Empty',
        component: () => import('@/views/Empty/Empty.vue')
    },
    {
        path: '/Application',
        name: 'Application',
        component: () => import('@/views/Application/Application.vue'),
        children: [
            {
                path: 'Home',
                name: 'Home',
                component: () => import('@/views/Application/Children/Home/Home.vue'),
            },
            {
                path: 'Work',
                name: 'Work',
                component: () => import('@/views/Application/Children/Work/Work.vue'),
            },
            {
                path: 'Store',
                name: 'Store',
                component: () => import('@/views/Application/Children/Store/Store.vue'),
            },
            {
                path: 'Message',
                name: 'Message',
                component: () => import('@/views/Application/Children/Message/Message.vue'),
            },
        ]
    },
    {
        path: '/Tray',
        name: 'Tray',
        component: () => import('@/views/Tray/Tray.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
