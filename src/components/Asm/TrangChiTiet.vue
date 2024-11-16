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

<div class="col-sm-8">
    <h2 class="text-info mb-3">Blog của tôi</h2>
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="./images/tap-piltes.jpg" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống</h5>
                    <p class="card-text">Người tập với tư thế đúng sẽ rất tốt cho cột sống. Đây là môn thể thao nhẹ nhàng.</p>
                    <a href="/asm/WebChinh/TapPilates1" class="btn btn-info">Xem chi tiết</a>
                </div>
            </div>
        </div>
    </div>
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="./images/eat-clean.png" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Bí quyết ăn uống lành mạnh</h5>
                    <p class="card-text">Bí quyết ăn uống lành mạnh và đầy đủ dinh dưỡng.</p>
                    <a href="/Asm/WebChinh/CleanEating" class="btn btn-info">Xem chi tiết</a>
                    
                </div>
            </div>
        </div>
    </div>

    <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="./images/QuanSu1.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Đào tạo quân sự có gì hay?</h5>
                            <p class="card-text">Đào tạo quân sự không chỉ rèn luyện thể lực mà còn giúp người tham gia phát triển kỹ năng sinh tồn, tính kỷ luật và tinh thần đồng đội...</p>
                            <a href="/asm/WebChinh/QuanSu" class="btn btn-info">Xem Chi tiết</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="./images/QuanSu3.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Những luật lệ bạn cần phải tuân theo trước khi bạn vào quân sự</h5>
                            <p class="card-text">Khi tham gia môi trường quân sự, việc tuân thủ các luật lệ là điều kiện tiên quyết để duy trì kỷ luật và tổ chức. Dưới đây là những quy định...</p>
                            <a href="/asm/WebChinh/QuanSu2" class="btn btn-info">Xem Chi tiết</a>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" class="btn btn-info">Xem thêm</a>
</div>
    </template>
    
    <script>
    export default {
    name: "ChiTiet",
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