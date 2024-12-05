<template>
    <div>
      <!-- Hiển thị Login nếu chưa đăng nhập -->
      <Login v-if="!isLoggedIn" @loggedIn="handleLoginSuccess" />
      <!-- Hiển thị CleanEating (hoặc index) nếu đã đăng nhập -->
      <!-- <index v-else :username="loggedInUser" /> -->
      <!-- Sử dụng component khác nhau khi đã đăng nhập -->
       
      <div v-else>
      <!-- Menu chuyển đổi view -->
      <nav>
        <button @click="switchView('index')">Index</button>
        <button @click="switchView('QuanSu')">Quan Su</button>
        <button @click="switchView('QuanSu2')">Quan Su 2</button>
      </nav>

      <!-- Hiển thị component tương ứng -->
      <index v-if="currentView === 'index'" :username="loggedInUser" />
      <QuanSu v-else-if="currentView === 'QuanSu'" :username="loggedInUser" />
      <QuanSu2 v-else-if="currentView === 'QuanSu2'" :username="loggedInUser" />
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import Login from "../Login.vue";
  import index from "./CleanEating.vue"; // Đổi "CleanEating" thành "index" để khớp với template
  import QuanSu from "./QuanSu.vue";
  import QuanSu2 from "./QuanSu2.vue";
  
  // Quản lý trạng thái đăng nhập và tên người dùng đã đăng nhập
  const isLoggedIn = ref(false);
  const loggedInUser = ref("");
  const currentView = ref("index");
  
  // Xử lý khi người dùng đăng nhập thành công
  function handleLoginSuccess(username) {
    loggedInUser.value = username;
    isLoggedIn.value = true;
  }

  //chuyển đổi các view
  function switchView(viewName) {
  currentView.value = viewName;
}
  </script>
  
  <script>
  export default {
    name: "CommentPage",
  };
  </script>

