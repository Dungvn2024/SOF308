<template>
<nav class="navbar navbar-expand-sm navbar-dark">
            <a class="navbar-brand" href="/public/index.html">
                <img src="../images/FPT-Poly.png" alt="" style="width: 150px;">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/asm/index"><i class="fa-solid fa-list"></i> trang chủ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/asm/Baiviet"><i class="fa-solid fa-list"></i> Bài viết</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="/asm/TrangChiTiet"><i class="fa-solid fa-list"></i> trang chi tiết</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa-solid fa-film"></i> Video</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/asm/GioiThieu"><i class="fa-solid fa-circle-info"></i> Giới thiệu bản thân</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/asm/LienHe"><i class="fa-solid fa-calendar-days"></i> Liên hệ</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            <i class="fa-solid fa-user"></i> Tài khoản
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/asm/TaiKhoan/dangnhap">Đăng nhập</a></li>
                            <li><a class="dropdown-item" href="/asm/TaiKhoan/Dangky">Quên mật khẩu</a></li>
                            <li><a class="dropdown-item" href="/asm/TaiKhoan/Quenmk">Đăng ký thành viên</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="navbar-nav d-flex">
                    <li class="nav-item">
                        <a class="nav-link">Tiếng Việt</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Tiếng Anh</a>
                    </li>
                </ul>
            </div>
    </nav>

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
        background-color: lightgrey; /* Light background for navbar */
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
    

      form {
    background-color: #f8f9fa; /* Màu nền sáng */
    padding: 20px;
    border: 1px solid #ddd; /* Viền mỏng */
    border-radius: 8px; /* Góc bo tròn */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Đổ bóng */
}

body {
    display: flex;
    justify-content: center; /* Căn giữa theo chiều ngang */
    align-items: center; /* Căn giữa theo chiều dọc */
    height: 100vh; /* Chiều cao 100% viewport */
    margin: 0;
    background-color: #f9f9f9; /* Màu nền */
}

form .form-label {
    font-weight: bold;
    color: #333; /* Màu chữ nhấn mạnh */
}

form .form-control {
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 10px;
    font-size: 14px;
}

form .form-control:focus {
    border-color: #17a2b8; /* Màu viền khi được chọn */
    box-shadow: 0 0 5px rgba(23, 162, 184, 0.5);
}

form .btn-primary {
    background-color: #17a2b8;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 14px;
    cursor: pointer;
}

form .btn-primary:hover {
    background-color: #138496;
}

/* CSS riêng cho từng form */
.card-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #17a2b8; /* Màu tiêu đề */
}

#loginEmail, #loginPassword {
    background-color: #fdfdfd; /* Màu nền nhẹ hơn */
}

#fullName, #email, #phone, #password, #confirmPassword {
    background-color: #fdfdfd; /* Màu nền nhẹ hơn */
}

/* Radio Buttons and Checkboxes */
.form-check-input {
    margin-right: 8px;
    accent-color: #17a2b8; /* Màu nhấn cho radio và checkbox */
}

.form-check-label {
    font-size: 14px;
}

/* Select Dropdown */
#language {
    font-size: 14px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

/* Điều chỉnh layout cho mobile */
@media (max-width: 768px) {
    .col-md-6 {
        margin-bottom: 20px;
    }
}

    </style>