
<template>
    <div class="container mt-5">
    <div class="row">
        <!-- Registration Form -->
        <div class="col-md-6">
            <div class="card p-4">
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
                    <div class="mb-3">
                        <label class="form-label">Giới Tính</label><br>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="gender" id="male" value="Nam">
                            <label class="form-check-label" for="male">Nam</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="gender" id="female" value="Nữ">
                            <label class="form-check-label" for="female">Nữ</label>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="language" class="form-label">Ngôn Ngữ</label>
                        <select class="form-select" id="language">
                            <option>Tiếng Việt</option>
                            <option>English</option>
                        </select>
                    </div>
                    <div class="form-check mb-3">
                        <input class="form-check-input" type="checkbox" id="terms">
                        <label class="form-check-label" for="terms">Tôi đồng ý với các điều khoản và điều kiện</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Đăng Ký</button>
                </form>
            </div>
        </div>

        <!-- Login Form -->
        <div class="col-md-6">
            <div class="card p-4">
                <h5 class="card-title">Form Đăng Nhập</h5>
                <form>
                    <div class="mb-3">
                        <label for="loginEmail" class="form-label">Email</label>
                        <input type="email" class="form-control" id="loginEmail" placeholder="Nhập email">
                    </div>
                    <div class="mb-3">
                        <label for="loginPassword" class="form-label">Mật Khẩu</label>
                        <input type="password" class="form-control" id="loginPassword" placeholder="Nhập mật khẩu">
                    </div>
                    <button type="submit" class="btn btn-primary">Đăng Nhập</button>
                </form>
            </div>
        </div>
    </div>
</div>


  </template>
      
      <script>
      
      export default {
      name: "Lab2Bai2Page",
      };
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