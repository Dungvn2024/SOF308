<template>
    <div class="col-sm-8">
    <h1>Thông tin cá nhân</h1>
        <form>
            <div class="mb-3">
                <label>Họ và Tên:</label>
                <input v-model="userInfo.name" type="text" class="form-control"
placeholder="Nhập họ và tên" />
            </div>
            <div class="mb-3">
                <label>Tuổi:</label>
                <input v-model="userInfo.age" type="number" class="form-control"
placeholder="Nhập tuổi" />
            </div>
            <div class="mb-3">
                <label>Email:</label>
                <input v-model="userInfo.email" type="email" class="form-control"
placeholder="Nhập email" />
            </div>
        </form>
        <!-- Hiển thị thông tin ngay sau khi nhập -->
        <div class="info-display mt-4 p-3 bg-dark text-white rounded">
            <h2>Thông tin đã nhập:</h2>
            <p><strong>Họ và Tên:</strong> {{ userInfo.name }}</p>
            <p><strong>Tuổi:</strong> {{ userInfo.age }}</p>
            <p><strong>Email:</strong> {{ userInfo.email }}</p>
        </div>
    </div>
</template>

<script>
export default {
name: "Lab5Bai3Page",
};
</script>

<script setup>
import { reactive } from 'vue';
// Khởi tạo đối tượng thông tin người dùng sử dụng reactive để tạo reactivity
const userInfo = reactive({
name: '',
age: null,
email: ''
});
</script>

<style scoped>
/* Đặt hướng văn bản từ trái sang phải */
p {
  direction: ltr;
  text-align: left;
}
.info-display {
  line-height: 1.6;
}

.form-control {
  width: auto;
  flex-grow: 1;
}

label {
  margin-right: 10px;
  font-weight: bold;
}

.mb-3 {
  display: flex;
  align-items: center; /* Canh giữa theo trục dọc */
  justify-content: flex-start; /* Căn từ trái sang */
  margin-bottom: 1rem;
}
</style>