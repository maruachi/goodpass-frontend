import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/components/LoginView.vue';
import MembershipOptionView from "@/components/MembershipOptionView.vue";


const routes = [
    { path: '/login', component: LoginView },
    { path: '/business/:businessId/membership/options', component: MembershipOptionView },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;