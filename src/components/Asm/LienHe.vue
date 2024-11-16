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

    <h1>Liên hệ với chúng tôi</h1> <br>

    <div class="contact-form">
    <form @submit.prevent="submitForm">
      <label for="name">Họ và Tên</label>
      <input type="text" id="name" v-model="name" placeholder="Nhập tên của bạn" required />

      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" placeholder="Nhập email của bạn" required />

      <label for="message">Tin nhắn</label>
      <textarea id="message" v-model="message" placeholder="Nhập tin nhắn của bạn" required></textarea>

      <button type="submit">Gửi</button>
    </form>
  </div>
        </template>
        
        <script>
        export default {
        name: "LienHe",
        data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      alert(`Cảm ơn ${this.name}, chúng tôi đã nhận được tin nhắn của bạn!`);
      this.name = '';
      this.email = '';
      this.message = '';
    },
  },
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
.contact-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.contact-form label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.contact-form button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.contact-form button:hover {
  background-color: #0056b3;
}
</style>