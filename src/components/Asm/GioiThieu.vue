<template>

<nav class="navbar navbar-expand-sm navbar-dark">
            <a class="navbar-brand" href="/public/index.html">
                <img src="./images/FPT-Poly.png" alt="" style="width: 150px;">
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

  <!-- Sidebar: Về tôi Section (25%) -->
    <h2 class="text-info">Về tôi</h2>
      <!-- Avatar Image -->
      <img src="./images/tn.jpg" alt="Avatar" />
      <div class="card-body">
        <h5 class="card-title">Giới thiệu bản thân</h5>
        <!-- Personal Introduction Text -->
        <p class="card-text">
          Tên: Nguyễn Thanh Dũng<br />
          Một sinh viên học tại trường Fpt Polytechnic <br>
          Nơi ở: bình Dương, huyện Phù Mỹ, tỉnh Bình Định <br>
          Nơi sống hiện tại: 169 đường Thanh Niên, Thành Phố Quy Nhơn <br>
          Châm ngôn: "Thành công không phải là điểm đến, mà là hành trình."
        </p>
      </div>
        </template>
        
        <script>
        export default {
        name: "MainContact",
        };
        </script>
        
        <style scoped>
.navbar {
        background-color: white; /* Light background for navbar */
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