<template>
    <div class="d-flex justify-content-between">
      <!-- Form Đăng ký -->
      <div class="p-5 col-sm-5">
        <h3>Form Đăng Ký</h3>
        <form @submit.prevent="register">
          <div class="mb-3">
            <label>Họ tên:</label>
            <input type="text" class="form-control" v-model="name" placeholder="Họ tên">
          </div>
          <div class="mb-3">
            <label>Email:</label>
            <input type="email" class="form-control" v-model="email" placeholder="Nhập email">
          </div>
          <div class="mb-3">
            <label>Mật khẩu:</label>
            <input type="password" class="form-control" v-model="password" placeholder="Nhập mật khẩu">
          </div>
          <div class="mb-3">
            <label>Ngày sinh:</label>
            <input type="date" class="form-control" v-model="birthDate">
          </div>
          <div class="mb-3">
            <label>Giới tính:</label>
            <div>
              <input type="radio" v-model="gender" value="Nam"> Nam
              <input type="radio" v-model="gender" value="Nữ"> Nữ
              <input type="radio" v-model="gender" value="Khác"> Khác
            </div>
          </div>
          <div class="mb-3">
            <label>Ngôn ngữ:</label>
            <div>
              <input type="checkbox" v-model="languages" value="Tiếng Việt"> Tiếng Việt
              <input type="checkbox" v-model="languages" value="Tiếng Anh"> Tiếng Anh
              <input type="checkbox" v-model="languages" value="Tiếng Nhật"> Tiếng Nhật
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Đăng ký</button>
        </form>
      </div>
  
      <!-- Thông tin đã đăng ký -->
      <div class="p-5 col-sm-5">
        <h3>Thông tin đã đăng ký:</h3>
        <p>Họ tên: {{ name }}</p>
        <p>Email: {{ email }}</p>
        <p>Ngày sinh: {{ birthDate }}</p>
        <p>Giới tính: {{ gender }}</p>
        <p>Ngôn ngữ: {{ languages.join(', ') }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const birthDate = ref('');
  const gender = ref('');
  const languages = ref([]);
  
  const register = () => {
    alert('Đăng ký thành công!');
  };
  </script>
  

<script>
export default {
  name: "Lab7Bai3Page",
};
</script>