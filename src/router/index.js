import { createRouter, createWebHistory } from 'vue-router';
import QuenMatKhau   from '../components/Lab3/QuenMK.vue'
import DangNhap from '../components/Lab3/Dangnhap.vue';
import DangKy from '../components/Lab3/DangKy.vue'

const routes = [
    { path: '/DangNhap', component: DangNhap },
    { path: '/DangKy', component: DangKy },
    { path: '/QuenMK', component: QuenMatKhau }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router