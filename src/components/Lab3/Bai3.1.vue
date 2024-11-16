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
                    <a class="nav-link" href="/lab3/bai3.1"><i class="fa-solid fa-list"></i> Bài viết</a>
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

<img src="./images/banner2.jpg" class="d-block w-100" alt="Carousel Image">


<div class="container mt-4">
  
  <!-- Main content -->
  <div class="row mt-4">

    <!-- Sidebar -->
    <div class="col-md-3">
      <h5>Chuyên mục</h5>
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

      <h5 class="mt-4">Bài viết nổi bật</h5>
      
      <div class="list-group">
        <li>
           <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
            <img src="./images/spinach_300x300.jpg" class="img-thumbnail me-3" style="width: 50px; height: 50px;" alt="Image 1">
             Lợi ích khi ăn rau mỗi ngày
           </a>
          </li>

        <li> 
          <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
            <img src="./images/orange_300x300.jpg" class="img-thumbnail me-3" style="width: 50px; height: 50px;" alt="Image 1">
            9 tác dụng tuyệt vời từ quả cam
          </a>
        </li>

        <li>
          <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
           <img src="./images/sesameoil_300x300.jpg" class="img-thumbnail me-3" style="width: 50px; height: 50px;" alt="Image 1">
          10 công dụng của dầu dừa
          </a>
                  </li>
      </div>
    </div>

    <!-- Main articles -->
    <div class="col-md-9">
      <h5 class="mb-4">Tất cả bài viết</h5>
      <div class="row">
          <div class="card">
            <img src="./images/tap-pilates1.jpg" class="card-img-top" alt="Article Image">
            <div class="card-body">
              <h6 class="card-title">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống {{ i }}</h6>
              <p class="card-text">Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, dẻo dai, các bài tập Pilates còn có khả năng trị đau lưng, là giải pháp hữu hiệu để phục hồi chấn thương cột sống.</p>
              <a href="#" class="btn btn-primary btn-sm">Xem thêm</a>
            </div>
            
            <div class="card">
            <img src="./images/tap-piltes.jpg" class="card-img-top" alt="Article Image">
            <div class="card-body">
              <h6 class="card-title">Đây là những gì 1 giờ Tập Pilates có thể làm cho cơ thể của bạn {{ i }}</h6>
              <p class="card-text">Được thiết kế để xây dựng cơ bắp săn chắc, khỏe mạnh hơn, bài tập này đã trở thành một cái tên quen thuộc mà rất nhiều người nổi tiếng theo dõi.</p>
              <a href="#" class="btn btn-primary btn-sm">Xem thêm</a>
            </div>
          </div>

          <div class="card">
            <img src="./images/tap-pilates2.jpg" class="card-img-top" alt="Article Image">
            <div class="card-body">
              <h6 class="card-title">Tập Pilates có thể cải thiện sức khỏe tim mạch của bạn</h6>
              <p class="card-text">Tập Pilates không chỉ giúp bạn có một cơ thể khỏe mạnh và linh hoạt mà còn có nhiều lợi ích cho sức khỏe tim mạch. Bài viết này sẽ nói về những tác động tích cực của việc tập Pilates đối với sức khỏe tim mạch của bạn.</p>
              <a href="#" class="btn btn-primary btn-sm">Xem thêm</a>
            </div>
          </div>

          <div class="card">
            <img src="./images/eat-clean.png" class="card-img-top" alt="Article Image">
            <div class="card-body">
              <h6 class="card-title">EAT CLEAN: Nên Và Không Nên Ăn Thực Phẩm Nào?</h6>
              <p class="card-text">Chúng ta luôn chú trọng trong lựa chọn thực phẩm sạch và duy trì lối sống lành mạnh. Vậy chế độ ăn Eat Clean nên và không nên ăn gì trong thực đơn hàng ngày để đảm bảo cung cấp đủ dinh dưỡng cho cơ thể?</p>
              <a href="#" class="btn btn-primary btn-sm">Xem thêm</a>
            </div>
          </div>

          
        </div>
      </div>

      

      <!-- Pagination -->
      <ul class="pagination justify-content-center mt-4">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </div>
  </div>
</div>



</template>
    
    <script>
    
    export default {
    name: "Lab3Bai31Page",
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