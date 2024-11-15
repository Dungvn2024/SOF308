<template>
 <div class="container mt-5">
  <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
  <div class="row">
    <div class="col-sm-4">
      <div class="card">
        <img :src="items[0].image" alt="Hình ảnh" />
        <div class="card-body">
            <h3 class="card-title">{{ items[0].title }}</h3>
            <p class="card-text">{{ items[0].content }}</p>
        <button class="btn btn-info">Xem chi tiết </button>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
        <img :src="items[1].image" alt="Hình ảnh" />
        <div class="card-body">
            <h3 class="card-title">{{ items[1].title }}</h3>
            <p class="card-text">{{ items[1].content }}</p>
          <button class="btn btn-info">Xem chi tiết</button>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
        <img :src="items[2].image" alt="Hình ảnh" />
        <div class="card-body">
            <h3 class="card-title">{{ items[2].title }}</h3>
            <p class="card-text">{{ items[2].content }}</p>
          <button class="btn btn-info">Xem chi tiết</button>
        </div>
      </div>
    </div>
  </div>
</div>

       </template>
       
    
           <script>
           export default {
           name: "Lab4Bai4Page",
    };
           </script>

<script setup>
// Import hình ảnh từ thư mục assets
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
const items = ([
{ title: '8 loại rau củ quả giàu canxi', content: 'Canxi là khoáng chất cần thiết đối với cơ thể ngupowgCanxi là khoáng chất cần thiết đối với cơ thể. Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các gia vị quen ... Đậu lành, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và ...', image: img1
},
{ title: 'Các loại gia vị tốt cho sức khỏe', content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác. Với một lượng nhỏ, các món ăn đã thêm hương thơm và vị hấp dẫn...',
image: img2 },
{ title: '9 loại đậu bổ dưỡng nên dùng nhiều', content: 'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất giúp giảm lượng đường trong máu, tốt cho tim...', image:
img3 },
]);

</script>

           <style>
.container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
}

.text-center {
  font-family: 'Arial', sans-serif;
  font-size: 28px;
  color: #333;
  font-weight: bold;
  margin-bottom: 30px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 15px;
  text-align: center;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 10px;
}

.card-text {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.btn {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 14px;
  text-transform: uppercase;
}

.btn:hover {
  background-color: #0056b3;
  color: #fff;
}
           </style>