<template>

<!-- <div class="slideshow-container">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      v-show="currentIndex === index"
      class="slide fade"
    >
      <img :src="slide" alt="Slide" />
    </div>
  </div> -->
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

  <img src="./images/Environment.jpg" class="d-block w-100" alt="Carousel Image">


  <div class="container">
  <!-- Sidebar: Về tôi Section (25%) -->
  <aside class="about-me">
    <h2 class="text-info">Về tôi</h2>
    <div class="card">
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
                            <a href="/asm/WebChinh/CleanEating" class="btn btn-info">Xem Chi tiết</a>
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
                            <p class="card-text">Đào tạo quân sự không chỉ rèn luyện thể lực mà còn giúp người tham gia phát triển kỹ năng sinh tồn, tính kỷ luật và tinh thần đồng đội.</p>
                            <a href="/asm/WebChinh/QuanSu" class="btn btn-info">Xem Chi tiết</a>
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




   <div class="container mt-5">
        <div class="container-flex">
            <!-- Sidebar Section: Đọc nhiều & Xem nhiều -->
            <div class="sidebar">
                <h3 class="text-info">Đọc nhiều & Xem nhiều</h3>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="doc-nhieu-tab" data-bs-toggle="tab" data-bs-target="#doc-nhieu" type="button" role="tab" aria-controls="doc-nhieu" aria-selected="true">Đọc nhiều</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="xem-nhieu-tab" data-bs-toggle="tab" data-bs-target="#xem-nhieu" type="button" role="tab" aria-controls="xem-nhieu" aria-selected="false">Xem nhiều</button>
                    </li>
                </ul>
                <div class="tab-content mt-3" id="myTabContent">
                    <!-- Đọc nhiều Tab -->
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
                    <!-- Xem nhiều Tab -->
                    <div class="tab-pane fade" id="xem-nhieu" role="tabpanel" aria-labelledby="xem-nhieu-tab">
                        <ul class="list-group">
                            <li>
                          <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                          <img src="./images/corevalue.jpg" class="img-thumbnail me-3" style="width: 50px; height: 50px;" alt="Image 1">
                            Biết ơn đời, đời sẽ thương ta
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
            
            <!-- Main Content Section: Video - Đừng bỏ lỡ -->
            <div class="main-content">
                <h3 class="text-info">Video - Đừng bỏ lỡ</h3>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <!-- Video Item 1 -->
                    <div class="col">
<div class="card h-100">
<img src="./images/video1.jpg" class="card-img-top" alt="Video 1">
<div class="card-body">
<h5 class="card-title">Đi xa hơn trong thành công</h5>
<p class="card-text">Tuổi trẻ chỉ nghĩ đến những chuyến đi, đời mong một ngày được bay nhảy trên những phương trời mới lạ...</p>
</div>
</div>
</div>
<!-- Video Item 2 -->
<div class="col">
<div class="card h-100">
<img src="./images/video2.jpg" class="card-img-top" alt="Video 2">
<div class="card-body">
<h5 class="card-title">Chat với những ngày cuối năm</h5>
<p class="card-text">Guồng quay cuộc sống đâu có vội vàng, đâu có tốc nạp đến đâu thi cũng chẳng nằm ngoài quy luật...</p>
</div>
</div>
</div>

<div class="col">
<div class="card h-100">
  <img src="./images/video3.jpg" class="card-img-top" alt="Video 3">
  <div class="card-body">
      <h5 class="card-title">Ước gì được trở về tuổi thơ</h5>
      <p class="card-text">Tuổi trẻ chỉ nghĩ đến những chuyến đi, đời mong một ngày được bay nhảy trên những phương trời mới lạ. Để rồi những cô đơn và mệt mỏi, tuổi trẻ ấy mới dừng muốn một nơi để trở về.</p>
  </div>
</div>
</div>

<div class="col">
<div class="card h-100">
<img src="./images/video4.jpg" class="card-img-top" alt="Video 4">
<div class="card-body">
    <h5 class="card-title">Ba người thầy vĩ đại</h5>
    <p class="card-text">Ta xem vạn vật là thầy. Tinh thần học hỏi của ta luôn rộng mở trước tất cả các người. Ta nói rằng nếu có một tài sản cần xây dựng cho đến đậm máy trên trời kia.</p>
</div>
</div>
</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "HomePage",

};
</script>

<style scoped>
.navbar {
        background-color: lightgoldenrodyellow; /* Light background for navbar */
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




/* banner */

.carousel-inner img {
  height: 400px; /* Adjust height as needed */
  object-fit: cover;
}

/* Slide */
.slideshow-container {
  position: relative;
  max-width: 100%;
  margin: auto;
}

.slide {
  display: none;
}

.slide img {
  width: 100%;
  vertical-align: middle;
}

.fade {
  animation: fade 1.5s;
}

@keyframes fade {
  from { opacity: 0.4; }
  to { opacity: 1; }
}

/* giao dien */
.sidebar {
            width: 30%;
            background-color: #f8f9fa;
            padding: 15px;
        }

        .main-content {
            width: 70%;
            padding: 15px;
        }

        .container-flex {
            display: flex;
            gap: 15px;
        }

        .nav-tabs .nav-link.active {
            background-color: #17a2b8;
            color: white;
        }

        .card-img-top {
            height: 180px;
            object-fit: cover;
        }

        #aside {
    flex: 0 0 30%;
    max-width: 30%;
}

#mainContent {
    flex: 0 0 70%;
    max-width: 70%;
}

/* gioi thieu */
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

