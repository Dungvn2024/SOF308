import { createRouter, createWebHistory } from 'vue-router';

import StartPage from "../components/Asm/Start.vue"
import LoginPage from "../components/Asm/Login.vue"
//Demo
import DemoAxiosPage from "../components/Demo/DemoAxios.vue"

//Lab1
import Bai1Page from "../components/Lab1/bai1.vue"
import NavBarPage from "../components/Lab1/bai2.vue"
import Lab1SidebarPage from "../components/Lab1/bai3.vue"
import Lab1MainContact from "../components/Lab1/bai4.vue"

//Lab2
import Lab2Bai1Page from "../components/Lab2/Bai1.vue"
import Lab2Bai2Page from "../components/Lab2/Bai2.vue"
import Lab2Bai3Page from "../components/Lab2/Bai3.vue"
import Lab2Bai4Page from "../components/Lab2/Bai4.vue"

//Lab3
import Lab3Bai1Page from "../components/Lab3/Bai1.vue"
import Lab3Bai2Page from "../components/Lab3/Bai2.vue"
import Lab3Bai3Page from "../components/Lab3/Bai3.vue"
import Lab3Bai4Page from "../components/Lab3/Bai4.vue"

//side
import Lab3Bai31Page from "../components/Lab3/Bai3.1.vue"
import Lab3TapPilates1 from "../components/Lab3/WebChinh/Tap-pilates1.vue"
//Lab4

import Lab4Bai2Page from "../../Lab4/src/components/Hello.vue"
import Lab4Bai3Page from "../../Lab4/src/components/Bai3.vue"
import Lab4Bai4Page from "../../Lab4/src/components/Bai4.vue"

//Lab5
import Lab5Bai1Page from "../components/Lab5/Bai1.vue"
import Lab5Bai2Page from "../components/Lab5/Bai2.vue"
import Lab5Bai3Page from "../components/Lab5/Bai3.vue"
import Lab5Bai4Page from "../components/Lab5/App.vue"

// import CreatePostPage from "../components/Lab5/CreatePost.vue"
// import PostListPage from "../components/Lab5/PostList.vue"

//Lab6
import Lab6Bai1Page from "../components/Lab6/Bai1.vue"
import Lab6Bai2Page from "../components/Lab6/Bai2.vue"
import Lab6Bai3Page from "../components/Lab6/Bai3.vue"
import Lab6Bai4Page from "../components/Lab6/Bai4.vue"

//Lab7
import Lab7Bai1Page from "../components/Lab7/Bai1.vue"
import Lab7Bai2Page from "../components/Lab7/Bai2.vue"
import Lab7Bai3Page from "../components/Lab7/Bai3.vue"
import Lab7Bai4Page from "../components/Lab7/Bai4.vue"

import Lab7Bai41Page from "../components/Lab7/LoginComponent.vue"
import Lab7Bai42Page from "../components/Lab7/CommentComponent.vue"
//Lab8
// import Lab8Bai1Page from "../components/Lab8/Bai1.vue"
// import Lab8Bai2Page from "../components/Lab8/Bai2.vue"
// import Lab8Bai3Page from "../components/Lab8/Bai3.vue"
// import Lab8Bai4Page from "../components/Lab8/Bai4.vue"

// Asm
import HomePage from "../components/Asm/index.vue"
 import MainContact from "../components/Asm/GioiThieu.vue"
 import ChiTiet from "../components/Asm/TrangChiTiet.vue"
 import DangNhap from "../components/Asm/TaiKhoan/Dangnhap.vue"
 import DangKy from "../components/Asm/TaiKhoan/DangKy.vue"
 import QuenMK from "../components/Asm/TaiKhoan/QuenMK.vue"
 import BaiVietPage from "../components/Asm/Baiviet.vue"
 import LienHe from "../components/Asm/LienHe.vue"
 
// Trang web

 import TapPilates1 from "../components/Asm/WebChinh/Tap-pilates1.vue"
 import CleanEating from "../components/Asm/WebChinh/CleanEating.vue"
 import QuanSu1 from "../components/Asm/WebChinh/QuanSu.vue"
 import QuanSu2 from "../components/Asm/WebChinh/QuanSu2.vue"
 
 import CommentPage from "../components/Asm/WebChinh/App.vue"












const routes = [

    { path: '/asm/Start', component: StartPage},
    { path: '/asm/Login', component: LoginPage},

    //Demo
    { path: '/Demo/DemoAxios', component: DemoAxiosPage},

    //Lab1 

    { path: '/Lab1/bai1', component: Bai1Page},
    { path: '/Lab1/bai2', component: NavBarPage},
    { path: '/Lab1/bai3', component: Lab1SidebarPage},
    { path: '/Lab1/bai4', component: Lab1MainContact},
    //Lab2
    { path: '/Lab2/bai1', component: Lab2Bai1Page},
    { path: '/Lab2/bai2', component: Lab2Bai2Page},
    { path: '/Lab2/bai3', component: Lab2Bai3Page},
    { path: '/Lab2/bai4', component: Lab2Bai4Page},
    //lab3
    { path: '/Lab3/bai1', component: Lab3Bai1Page},
    { path: '/Lab3/bai2', component: Lab3Bai2Page},
    { path: '/Lab3/bai3', component: Lab3Bai3Page},
    { path: '/Lab3/bai4', component: Lab3Bai4Page},
    //side
    { path: '/Lab3/bai3.1', component: Lab3Bai31Page},
    { path: '/Lab3/WebChinh/TapPilates1', component: Lab3TapPilates1  },
    //lab4
    { path: '/Lab4/Hello', component: Lab4Bai2Page},
    { path: '/Lab4/Bai3', component: Lab4Bai3Page},
    { path: '/Lab4/Bai4', component: Lab4Bai4Page},
    //lab5

    {path: '/Lab5/bai1', component: Lab5Bai1Page},
    {path: '/Lab5/bai2', component: Lab5Bai2Page},
    {path: '/Lab5/bai3', component: Lab5Bai3Page},
    {path: '/Lab5/App', component: Lab5Bai4Page},

    // {path: '/Lab5/CreatePost', component: CreatePostPage},
    // {path: '/Lab5/PostList', component: PostListPage},

    //Lab6
    {path: '/Lab6/bai1', component: Lab6Bai1Page},
    {path: '/Lab6/bai2', component: Lab6Bai2Page},
    {path: '/Lab6/bai3', component: Lab6Bai3Page},
    {path: '/Lab6/bai4', component: Lab6Bai4Page},

    //Lab7
    {path: '/Lab7/bai1', component: Lab7Bai1Page},
    {path: '/Lab7/bai2', component: Lab7Bai2Page},
    {path: '/Lab7/bai3', component: Lab7Bai3Page},
    {path: '/Lab7/bai4', component: Lab7Bai4Page},

    {path: '/Lab7/LoginComponent', component: Lab7Bai41Page},
    {path: '/Lab7/CommentComponent', component: Lab7Bai42Page},

    //Lab8
    // {path: '/Lab8/bai1', component: Lab8Bai1Page},
    // {path: '/Lab8/bai2', component: Lab8Bai2Page},
    // {path: '/Lab8/bai3', component: Lab8Bai3Page},
    // {path: '/Lab8/bai4', component: Lab8Bai4Page},
// Asm 
    { path: '/Asm/index', component: HomePage },
    { path: '/Asm/GioiThieu', component: MainContact },
    { path: '/Asm/TrangChiTiet', component: ChiTiet },
    { path: '/Asm/TaiKhoan/Dangnhap', component: DangNhap },
    { path: '/Asm/TaiKhoan/DangKy', component: DangKy },
    { path: '/Asm/TaiKhoan/QuenMK', component: QuenMK },
    { path: '/Asm/Baiviet', component: BaiVietPage  },
    { path: '/Asm/LienHe', component: LienHe  },


    { path: '/Asm/WebChinh/TapPilates1', component: TapPilates1  },
    { path: '/Asm/WebChinh/CleanEating', component: CleanEating  },
    { path: '/Asm/WebChinh/QuanSu', component: QuanSu1  },
    { path: '/Asm/WebChinh/QuanSu2', component: QuanSu2  },

    {path: '/Asm/WebChinh/App', component: CommentPage},
    



   










];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;