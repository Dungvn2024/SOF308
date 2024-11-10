<template>
    
  <div class="container mt-5">
    <div class="container-flex">
      <!-- Đọc nhiều & Xem nhiều as Aside -->
      <aside>
        <h3 class="text-info">Đọc nhiều & Xem nhiều</h3>
        <!-- Nav Tabs -->
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="doc-nhieu-tab" data-bs-toggle="tab" data-bs-target="#doc-nhieu" type="button" role="tab" aria-controls="doc-nhieu" aria-selected="true">Đọc nhiều</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="xem-nhieu-tab" data-bs-toggle="tab" data-bs-target="#xem-nhieu" type="button" role="tab" aria-controls="xem-nhieu" aria-selected="false">Xem nhiều</button>
          </li>
        </ul>
        <!-- Tab Content -->
        <div class="tab-content mt-3" id="myTabContent">
          <!-- Đọc nhiều Tab -->
          <div class="tab-pane fade show active" id="doc-nhieu" role="tabpanel" aria-labelledby="doc-nhieu-tab">
            <ul class="list-group">
              <li><a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                <img src="../Lab3 - Ta__i Nguye__n/Lab3 - Ta╠Çi Nguye╠én/images/corevalue.jpg" class="img-thumbnail me-3" style="width: 50px; height: 50px;" alt="Image 1"> Biết ơn đời, đời sẽ thương ta</a></li>
              <li><a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                <img src="../Lab3 - Ta__i Nguye__n/Lab3 - Ta╠Çi Nguye╠én/images/sesameoil_300x300.jpg" class="img-thumbnail me-3" style="width: 50px; height: 50px;" alt="Image 1"> 10 công dụng của dầu dừa</a></li>
              <li><a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                <img src="../Lab3 - Ta__i Nguye__n/Lab3 - Ta╠Çi Nguye╠én/images/spinach_300x300.jpg" class="img-thumbnail me-3" style="width: 50px; height: 50px;" alt="Image 1"> Lợi ích khi ăn rau mỗi ngày</a></li>
            </ul>
          </div>
          <!-- Xem nhiều Tab -->
          <div class="tab-pane fade" id="xem-nhieu" role="tabpanel" aria-labelledby="xem-nhieu-tab">
            <ul class="list-group">
              <li><a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                <img src="../Lab3 - Ta__i Nguye__n/Lab3 - Ta╠Çi Nguye╠én/images/corevalue.jpg" class="img-thumbnail me-3" style="width: 50px; height: 50px;" alt="Image 1"> Biết ơn đời, đời sẽ thương ta</a></li>
              <li><a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                <img src="../Lab3 - Ta__i Nguye__n/Lab3 - Ta╠Çi Nguye╠én/images/sesameoil_300x300.jpg" class="img-thumbnail me-3" style="width: 50px; height: 50px;" alt="Image 1"> 10 công dụng của dầu dừa</a></li>
              <li><a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                <img src="../Lab3 - Ta__i Nguye__n/Lab3 - Ta╠Çi Nguye╠én/images/spinach_300x300.jpg" class="img-thumbnail me-3" style="width: 50px; height: 50px;" alt="Image 1"> Lợi ích khi ăn rau mỗi ngày</a></li>
            </ul>
          </div>
        </div>
      </aside>

      <!-- Video - Đừng bỏ lỡ as Article -->
    <article>
        <h3 class="text-info">Video - Đừng bỏ lỡ</h3>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card h-100">
              <img src="../Lab3 - Ta__i Nguye__n/Lab3 - Ta╠Çi Nguye╠én/images/video1.jpg" class="card-img-top" alt="Video 1">
              <div class="card-body">
                <h5 class="card-title">Đi xa hơn trong thành công</h5>
                <p class="card-text">Tuổi trẻ chỉ nghĩ đến những chuyến đi, đời mong một ngày được bay nhảy trên những phương trời mới lạ...</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="../Lab3 - Ta__i Nguye__n/Lab3 - Ta╠Çi Nguye╠én/images/video2.jpg" class="card-img-top" alt="Video 2">
              <div class="card-body">
                <h5 class="card-title">Chat với những ngày cuối năm</h5>
                <p class="card-text">Guồng quay cuộc sống đâu có vội vàng, đâu có tốc nạp đến đâu thi cũng chẳng nằm ngoài quy luật...</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
                <img src="../Lab3 - Ta__i Nguye__n/Lab3 - Ta╠Çi Nguye╠én/images/video3.jpg" class="card-img-top" alt="Video 2">
                <div class="card-body">
                    <h5 class="card-title">Ước gì được trở về tuổi thơ</h5>
                    <p class="card-text">Tuổi trẻ chỉ nghĩ đến những chuyến đi, đời mong một ngày được bay nhảy trên những phương trời mới lạ. Để rồi những cô đơn và mệt mỏi, tuổi trẻ ấy mới dừng muốn một nơi để trở về.</p>
                </div>
            </div>
        </div>

        <div class="col">
          <div class="card h-100">
              <img src="../Lab3 - Ta__i Nguye__n/Lab3 - Ta╠Çi Nguye╠én/images/video4.jpg" class="card-img-top" alt="Video 2">
              <div class="card-body">
                  <h5 class="card-title">Ba người thầy vĩ đại</h5>
                  <p class="card-text">Ta xem vạn vật là thầy. Tinh thần học hỏi của ta luôn rộng mở trước tất cả các người. Ta nói rằng nếu có một tài sản cần xây dựng cho đến đậm máy trên trời kia.</p>
              </div>
          </div>
      </div>
          <!-- More video cards as needed -->
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
name: "HomePage",
};
</script>

<style>
    /* Set layout proportions */
    .container-flex {
      display: flex;
      gap: 20px;
    }

    aside {
      flex: 0 0 25%;
    }

    article {
      flex: 0 0 75%;
    }

    /* Style for nav-tabs active link */
    .nav-tabs .nav-link.active {
      background-color: #17a2b8;
      color: white;
    }

    /* Style for video cards */
    .card-img-top {
      height: 180px;
      object-fit: cover;
    }
  </style>