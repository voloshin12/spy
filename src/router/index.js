import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/create',
        name: 'Create',
        component: () => import('../views/Create.vue'),
    },
    {
        path: '/connect',
        name: 'Connect',
        component: () => import('../views/Connect.vue'),
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import('../views/Settings.vue'),
    },
    {
        path: '/rules',
        name: 'Rules',
        component: () => import('../views/Rules.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
