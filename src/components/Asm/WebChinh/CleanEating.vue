<template>
    <div class="container">
      <!-- Main Content -->
      <main class="main-content">
        <h1 class="title">Bí quyết ăn uống lành mạnh</h1>
        <img src="../images/eat-clean.png" alt="Eat Clean" class="main-image" />
  
        <p>
          Chế độ ăn uống lành mạnh không chỉ giúp duy trì sức khỏe mà còn giúp
          cải thiện tinh thần, mang lại vóc dáng cân đối và tràn đầy năng lượng.
          Dưới đây là một số bí quyết giúp bạn xây dựng một chế độ ăn uống lành
          mạnh và khoa học.
        </p>
  
        <h2 class="section-title">Chọn thực phẩm tự nhiên và ít chế biến</h2>
        <p>
          Thực phẩm tự nhiên như rau xanh, hoa quả, ngũ cốc nguyên hạt và các loại
          đạm từ thịt nạc, cá sẽ cung cấp nhiều dưỡng chất cần thiết cho cơ thể.
          Hạn chế sử dụng thực phẩm chế biến sẵn vì chúng thường chứa nhiều chất
          bảo quản, đường và chất béo không lành mạnh.
        </p>
        <img src="../images/spinach_300x300.jpg" alt="Natural Foods" class="section-image" />
        <img src="../images/orange_300x300.jpg" alt="Natural Foods" class="section-image" />
        <img src="../images/Fruit.jpg" alt="Natural Foods" class="section-image" />
  
        <h3 class="section-title">Uống đủ nước mỗi ngày</h3>
        <p>
          Nước đóng vai trò quan trọng trong việc duy trì các chức năng của cơ thể.
          Hãy đảm bảo uống đủ 8 ly nước mỗi ngày để hỗ trợ quá trình trao đổi chất
          và giúp cơ thể luôn khỏe mạnh.
        </p>
  
        <h3 class="section-title">Hạn chế đường và thức ăn có hại</h3>
        <p>
          Đường và các loại thức ăn chứa nhiều dầu mỡ có thể gây hại cho sức khỏe
          nếu tiêu thụ quá mức. Hãy cố gắng thay thế bằng các loại trái cây ngọt
          tự nhiên và giảm thiểu đồ ăn nhanh.
        </p>
  
        <h3 class="section-title">Lời kết</h3>
        <p>
          Áp dụng các bí quyết ăn uống lành mạnh trên sẽ giúp bạn có một cuộc sống
          khỏe mạnh và tràn đầy năng lượng. Hãy bắt đầu từ những thay đổi nhỏ và
          duy trì lâu dài để đạt kết quả tốt nhất.
        </p>
      </main>
  
      <!-- Sidebar -->
      <aside class="sidebar">
        <h2>Bình luận</h2>
        <form @submit.prevent="submitComment" class="mt-3">
          <textarea v-model="commentText" class="comment-box" placeholder="Nhập bình luận của bạn"></textarea>
          <button type="submit" class="submit-btn">Gửi bình luận</button>
        </form>
  
        <div v-if="comments.length" class="mt-3">
          <h3>Danh sách các bình luận:</h3>
          <ul class="comment-list">
            <li v-for="(comment, index) in comments" :key="index">
              <p><strong>{{ comment.name }}</strong>: {{ comment.text }}</p>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { defineProps } from "vue";
  
  // Nhận tên người dùng từ cha thông qua props
  const props = defineProps(["username"]);
  
  // Biến lưu nội dung bình luận và danh sách bình luận
  const commentText = ref("");
  const comments = ref([]);
  
  // Hàm xử lý khi gửi bình luận
  function submitComment() {
    if (commentText.value.trim()) {
      comments.value.push({
        name: props.username, // Sử dụng tên từ props
        text: commentText.value.trim(),
      });
      commentText.value = ''; // Reset ô nhập liệu
    } else {
      alert("Vui lòng nhập nội dung bình luận!");
    }
  }
  </script>

<script>
       export default {
       name: "CleanEating",
       };
       </script>
       
       <style scoped>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    padding: 20px;
    background-color: #f9f9f9;
    color: #000; /* Chữ đen */
    text-align: left;
}

.container {
    display: flex;
    max-width: 1200px;
    margin: auto;
}

.main-content {
    flex: 0 0 70%;
    margin-right: 20px;
    text-align: left; /* Căn trái cho nội dung chính */
}

.sidebar {
    flex: 0 0 30%;
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: left; /* Căn trái cho phần sidebar */
}

.title {
    font-size: 24px;
    color: #17a2b8;
    margin-bottom: 20px;
    text-align: left; /* Căn trái cho tiêu đề */
}

.main-image, .section-image {
    width: 100%;
    height: auto;
    margin: 15px 0;
    border-radius: 8px;
}

.section-title {
    font-size: 20px;
    color: #17a2b8;
    margin: 15px 0;
    text-align: left; /* Căn trái cho các tiêu đề phần */
}

.comment-box {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    resize: none;
    text-align: left; /* Căn trái cho ô bình luận */
    color: #000; /* Chữ đen trong ô nhập liệu */
}

.submit-btn {
    width: 100%;
    padding: 10px;
    background-color: #17a2b8;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center; /* Căn chữ ở giữa nút */
}

.submit-btn:hover {
    background-color: #138496;
}

.comment-list {
    list-style-type: none;
    margin-top: 15px;
    text-align: left; /* Căn trái cho danh sách bình luận */
}

.comment-list li {
    padding: 8px;
    border-bottom: 1px solid #ddd;
    color: black
    
}
       </style>