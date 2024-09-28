import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/components/LoginView.vue';
import MembershipOptionsView from "@/components/MembershipOptionsView.vue";


const routes = [
    { name: 'login', path: '/admin/login', component: LoginView },
    { name: 'membershipOptions', path: '/business/:businessId/membership/options', component: MembershipOptionsView },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;