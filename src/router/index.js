import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { 
        path: '/',
        name: "home",
        component: () => import("@/pages/Home.vue")
    },
    { 
        path: '/board',
        name: "board",
        component: () => import("@/pages/board/list.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;