<template>
    <div class="container mt-5">
        <div class="row">
    <!-- Login Form -->
    <div class="forgot-password-container">
        <h2>Quên Mật Khẩu</h2>
        <p>Nhập địa chỉ email của bạn để nhận liên kết đặt lại mật khẩu.</p>
        <form action="process_forgot_password.php" method="POST">
            <input type="email" name="email" placeholder="Nhập email của bạn" required>
            <button type="submit">Gửi liên kết</button>
        </form>
        <a href="Dangnhap.vue">Quay lại Đăng nhập</a>
    </div>
    </div>
    </div>
    </template>
    
    <script>
    export default {
    name: "QuenMK",
    };
    </script>
    
    <style>
    
    </style>