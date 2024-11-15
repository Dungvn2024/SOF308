<template>
<nav class="navbar navbar-expand-sm navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="/public/index.html">
                <img src="./images/logo-energy-pilates.png" alt="" style="width: 150px;">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/public/index.html"><i class="fa-solid fa-list"></i> Bài viết</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa-solid fa-film"></i> Video</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa-solid fa-circle-info"></i> Giới thiệu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa-solid fa-calendar-days"></i> Sự kiện</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            <i class="fa-solid fa-user"></i> Tài khoản
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                            <li><a class="dropdown-item" href="#">Quên mật khẩu</a></li>
                            <li><a class="dropdown-item" href="#">Đăng ký thành viên</a></li>
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
        </div>
    </nav>

    <div class="col-sm-4">
    <h2 class="text-info mb-3">Về tôi</h2>
    <div class="card blog">
        <img src="./images/avatar.png" alt="...">
        <div class="card-body">
            <h5 class="card-title">Giới thiệu bản thân</h5>
            <p class="card-text">TS. Trần Hoàng, Tổ chức Tư vấn sức khỏe quốc tế độc lập<br>
                Châm ngôn: Ta không được chọn nơi mình sinh ra, nhưng ta được chọn cách mình sẽ sống
            </p>
        </div>
    </div>
    
    <h3 class="text-info mt-2">Chuyên mục</h3>
    <ul class="list-group">
        <li class="list-group-item active bg-info d-flex justify-content-between align-items-center">
            <a class="nav-link" href="#">Chế độ tập</a>
            <span class="badge bg-primary rounded-pill">12</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <a class="nav-link" href="#">Chế độ dinh dưỡng</a>
            <span class="badge bg-primary rounded-pill">15</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <a class="nav-link" href="#">Cẩm nang cuộc sống</a>
            <span class="badge bg-primary rounded-pill">99</span>
        </li>
    </ul>
    <!-- end Chuyên mục -->
</div>
    </template>
    
    <script>
    export default {
    name: 'Lab1SidebarPage'
    }
    </script>
    
    <style scoped>
      .navbar {
        background-color: #f8f9fa; /* Light background for navbar */
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