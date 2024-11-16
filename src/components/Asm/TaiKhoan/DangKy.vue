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

        <!-- Form Section -->
        <div class="form-container">
            <!-- Login Form -->
            
            <!-- Registration Form -->
            <div class="form-card">
                <h5 class="card-title">Form Đăng Ký Thông Tin</h5>
                <form>
                    <div class="mb-3">
                        <label for="fullName" class="form-label">Họ và Tên</label>
                        <input type="text" class="form-control" id="fullName" placeholder="Nhập họ và tên">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Nhập email">
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Số Điện Thoại</label>
                        <input type="tel" class="form-control" id="phone" placeholder="Nhập số điện thoại">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Mật Khẩu</label>
                        <input type="password" class="form-control" id="password" placeholder="Nhập mật khẩu">
                    </div>
                    <div class="mb-3">
                        <label for="confirmPassword" class="form-label">Xác Nhận Mật Khẩu</label>
                        <input type="password" class="form-control" id="confirmPassword" placeholder="Xác nhận mật khẩu">
                    </div>
                    <button type="submit" class="btn btn-primary">Đăng Ký</button>
                </form>
            </div>
        </div>

    </template>
    
    <script>
    export default {
    name: "DangKy",
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


      body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
}

/* Form Container */
.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 20px;
}

/* Form Cards */
.form-card {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 350px;
}

/* Buttons */
button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

/* Inputs */
input, select, textarea {
    width: 100%;
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
    </style>