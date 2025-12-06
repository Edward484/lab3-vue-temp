import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import('./views/Login.vue')},
    {
        path: '/',
        children: [
            {
                path: 'products',
                name: 'Products',
                component: () => import('./views/Products.vue'),
            }
        ]
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
})