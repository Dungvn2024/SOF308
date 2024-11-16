<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Lab 1
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/lab1/bai1">Bai 1</a></li>
                <li><a class="dropdown-item" href="/lab1/bai2">Bai 2</a></li>
                <li><a class="dropdown-item" href="/lab1/bai3">Bai 3</a></li>
                <li><a class="dropdown-item" href="/lab1/bai4">Bai 4</a></li>
              </ul>
            </li>
  
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Lab 2
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/lab2/bai1">Bai 1</a></li>
                <li><a class="dropdown-item" href="/lab2/bai2">Bai 2</a></li>
                <li><a class="dropdown-item" href="/lab2/bai3">Bai 3</a></li>
                <li><a class="dropdown-item" href="/lab2/bai4">Bai 4</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Lab 3
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/lab3/bai1">Bai 1</a></li>
                <li><a class="dropdown-item" href="/lab3/bai2">Bai 2</a></li>
                <li><a class="dropdown-item" href="/lab3/bai3">Bai 3</a></li>
                <li><a class="dropdown-item" href="/lab3/bai4">Bai 4</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Lab 4
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/lab4/Hello">Bai 2</a></li>
                <li><a class="dropdown-item" href="/lab4/Bai3">Bai 3</a></li>
                <li><a class="dropdown-item" href="/lab4/Bai4">Bai 4</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                asm
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/asm/index">trang chủ</a>
                  <a class="dropdown-item" href="/asm/TaiKhoan/dangnhap">đăng nhập</a>
                  <a class="dropdown-item" href="/asm/TaiKhoan/Dangky">đăng ký</a>
                  <a class="dropdown-item" href="/asm/TaiKhoan/Quenmk">QuenMK</a>
                  <a class="dropdown-item" href="/asm/TrangChiTiet">trang chi tiết</a>
                  <a class="dropdown-item" href="/asm/Baiviet">Bài viết</a>
                  <a class="dropdown-item" href="/asm/GioiThieu">Giới thiệu bản thân</a>
                  <a class="dropdown-item" href="/asm/LienHe">Liên hệ</a>
              </li>
            </ul>
          </li>
        </ul>
        
        

        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <!-- <nav class="navbar navbar-expand-sm navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="../../public/index.html">
                <img src="../components/Asm/images/logo-energy-pilates.png" alt="" style="width: 150px;">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa-solid fa-list"></i> Bài viết</a>
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
                            <li><a class="dropdown-item" href="Dangnhap.vue">Đăng nhập</a></li>
                            <li><a class="dropdown-item" href="QuenMK.vue">Quên mật khẩu</a></li>
                            <li><a class="dropdown-item" href="DangKy.vue">Đăng ký thành viên</a></li>
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

    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="../components/Asm/images/banner2.jpg" class="d-block w-100" alt="Carousel Image">
        </div>
    </div>
</div> -->
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style></style>