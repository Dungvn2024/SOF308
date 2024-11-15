import { createRouter, createWebHistory } from 'vue-router';

//Lab1
import Bai1Page from "../components/Lab1/bai1.vue"
import NavBarPage from "../components/Lab1/bai2.vue"
import Lab1SidebarPage from "../components/Lab1/bai3.vue"
import Lab1MainContact from "../components/Lab1/bai4.vue"

//Lab4

import Lab4Bai2Page from "../../Lab4/src/components/Hello.vue"
import Lab4Bai3Page from "../../Lab4/src/components/Bai3.vue"
import Lab4Bai4Page from "../../Lab4/src/components/Bai4.vue"

// Asm
import HomePage from "../components/Asm/index.vue"
 import MainContact from "../components/Asm/MainContact.vue"
 import DangNhap from "../components/Asm/TaiKhoan/Dangnhap.vue"
 import DangKy from "../components/Asm/TaiKhoan/DangKy.vue"
 import QuenMK from "../components/Asm/TaiKhoan/QuenMK.vue"
 import SidebarPage from "../components/Asm/Sidebar.vue"
 import BaiVietPage from "../components/Asm/Baiviet.vue"
// Trang web

 import TapPilates1 from "../components/Asm/WebChinh/Tap-pilates1.vue"
 import CleanEating from "../components/Asm/WebChinh/CleanEating.vue"


 












const routes = [
    //Lab1 

    { path: '/Lab1/bai1', component: Bai1Page},
    { path: '/Lab1/bai2', component: NavBarPage},
    { path: '/Lab1/bai3', component: Lab1SidebarPage},
    { path: '/Lab1/bai4', component: Lab1MainContact},
    //Lab2

    //lab3

    //lab4
    { path: '/Lab4/Hello', component: Lab4Bai2Page},
    { path: '/Lab4/Bai3', component: Lab4Bai3Page},
    { path: '/Lab4/Bai4', component: Lab4Bai4Page},
// Asm 
    { path: '/Asm/index', component: HomePage },
    { path: '/Asm/MainContact', component: MainContact },
    { path: '/Asm/TaiKhoan/Dangnhap', component: DangNhap },
    { path: '/Asm/TaiKhoan/DangKy', component: DangKy },
    { path: '/Asm/TaiKhoan/QuenMK', component: QuenMK },
    { path: '/Asm/Sidebar', component: SidebarPage  },
    { path: '/Asm/Baiviet', component: BaiVietPage  },

    { path: '/Asm/WebChinh/TapPilates1', component: TapPilates1  },
    { path: '/Asm/WebChinh/CleanEating', component: CleanEating  },



   










];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;