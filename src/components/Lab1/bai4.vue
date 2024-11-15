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

  <div class="container">
  <!-- Sidebar: Về tôi Section (25%) -->
  <aside class="about-me">
    <h2 class="text-info">Về tôi</h2>
    <div class="card">
      <!-- Avatar Image -->
      <img src="./images/avatar.png" alt="Avatar" />
      <div class="card-body">
        <h5 class="card-title">Giới thiệu bản thân</h5>
        <!-- Personal Introduction Text -->
        <p class="card-text">
          TS. Trần Hoàng, Tổ chức Tư vấn sức khỏe quốc tế độc lập<br />
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
  </aside>

  <!-- Main Content: Blog của tôi Section (75%) -->
  <main class="blog-content">
    <h2 class="text-info">Blog của tôi</h2>
    <div class="main-blog">
      <!-- Main Blog Article -->
      <main class="col-sm-8" id="mainContent">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="./images/tap-piltes.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống</h5>
                            <p class="card-text">Người tập với tư thế đúng sẽ rất tốt cho cột sống. Đây là môn thể thao nhẹ nhàng.</p>

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
                            
                        </div>
                    </div>
                </div>
            </div>

            <a href="#" class="btn btn-info">Xem Thêm</a>
        </main>


      


      <!-- Blog List Section -->
      <div class="sidebar">
                    <div class="tab-pane fade show active" id="doc-nhieu" role="tabpanel" aria-labelledby="doc-nhieu-tab">
                        <ul class="list-group">
                            <li>
                          <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                            <img src="./images/corevalue.jpg" class="img-thumbnail me-3" style="width: 50px; height: 50px;" alt="Image 1">
                            Biết ơn đời, đời sẽ thương ta
                        </a>
                      </li>
                      <li>
                          <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                            <img src="./images/orange_300x300.jpg" class="img-thumbnail me-3" style="width: 50px; height: 50px;" alt="Image 1">
                            9 tác dụng tuyệt vời của quả cam
                        </a>
                      </li>
                        <li>
                          <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                            <img src="./images/sesameoil_300x300.jpg" class="img-thumbnail me-3" style="width: 50px; height: 50px;" alt="Image 1">
                            10 công dụng của dầu dừa
                        </a>
                      </li>
                        <li>
                        <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                          <img src="./images/spinach_300x300.jpg" class="img-thumbnail me-3" style="width: 50px; height: 50px;" alt="Image 1">
                          Lợi ích khi ăn rau mỗi ngày
                      </a>
                    </li>
                        </ul>
                    </div>
                </div>
            </div>
  </main>
</div>
    </template>
    
    <script>
    export default {
    name: "Lab1MainContact",
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

      .container {
  display: flex;
  gap: 20px; /* Space between sections */
  margin: 20px; /* Outer margin */
}

/* Sidebar: Về tôi section, taking up 25% of the container */
.about-me {
  flex: 0 0 25%;
}

/* Main Content: Blog của tôi section, taking up 75% of the container */
.blog-content {
  flex: 0 0 75%;
}

/* Card styling for "Về tôi" section */
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  padding: 10px;
}

/* Avatar image styling */
.card img {
  width: 100%;
  height: auto;
  border-radius: 50%;
}

/* Flex layout for main blog article and list of additional articles */
.main-blog {
  display: flex;
  gap: 20px; /* Space between main article and blog list */
}

/* Main blog article styling */
.main-article {
  flex: 2;
}

.main-article img {
  width: 100%;
  border-radius: 8px; /* Rounded corners for main blog image */
}

.main-article h5 {
  margin-top: 10px;
  font-size: 1.2em;
}

/* Blog list section styling */
.blog-list {
  flex: 1;
}

/* Remove default list styling */
.blog-list ul {
  list-style: none;
  padding: 0;
}

/* Styling for each blog list item */
.blog-list li {
  display: flex;
  align-items: center;
  margin-bottom: 10px; /* Space between list items */
}

/* Blog list item image styling */
.blog-list li img {
  width: 50px;
  height: 50px;
  border-radius: 50%; /* Circular image */
  margin-right: 10px; /* Space between image and text */
}

/* Link styling for blog list items */
.blog-list li a {
  flex: 1;
  text-decoration: none;
  color: #000;
}

/* Font style for view count */
.blog-list li span {
  font-weight: bold;
  color: #888;
}
    </style>