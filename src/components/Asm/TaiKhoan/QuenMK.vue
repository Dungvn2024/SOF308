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
    
    <style scoped>
.navbar {
        background-color: green; /* Light background for navbar */
      }

      .navbar .nav-link {
        color: #000 !important; /* Set nav text color to black */
      }

      .navbar .navbar-brand img {
        width: 150px;
      }

      .navbar .dropdown-menu {
        background-color: #f8f9fa;
      }

      .dropdown-item {
        color: #000 !important; /* Set dropdown text color to black */
      }

      .navbar-nav.d-flex .nav-link {
        color: #000 !important;
      }
    
    </style>