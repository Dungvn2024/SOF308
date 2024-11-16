<template>
    <div class="container">
        <!-- Main Content -->
        <main class="main-content">
            <h1 class="title">Đào tạo quân sự có gì hay?</h1>
            <img src="../images/QuanSu1.jpg" alt="Military Training" class="main-image">
            
            <p>Đào tạo quân sự không chỉ rèn luyện thể lực mà còn giúp người tham gia phát triển kỹ năng sinh tồn, tính kỷ luật và tinh thần đồng đội. Bài viết này sẽ giới thiệu những điểm thú vị của quá trình đào tạo quân sự.</p>
            
            <h2 class="section-title">Lợi ích từ đào tạo quân sự</h2>
            <p>Trong môi trường quân sự, người học được rèn luyện thể lực, trau dồi tinh thần thép và khả năng ứng biến trong những tình huống khó khăn. Đây là hành trang quan trọng trong cả đời sống và công việc.</p>
            <img src="../images/QuanSu2.jpg" alt="Military Training Benefits" class="section-image">

            <h3 class="section-title">Các bài học nổi bật</h3>
            <p>Một số nội dung chính trong đào tạo quân sự:</p>
            <ul>
                <li>Học cách xử lý tình huống khẩn cấp.</li>
                <li>Rèn luyện khả năng làm việc nhóm hiệu quả.</li>
                <li>Phát triển tính kỷ luật cá nhân.</li>
                <li>Cải thiện sức bền và ý chí kiên cường.</li>
            </ul>

            <h3 class="section-title">Lời kết</h3>
            <p>Đào tạo quân sự mang lại nhiều trải nghiệm quý giá, giúp người tham gia phát triển toàn diện. Đây là cơ hội để khám phá bản thân và chuẩn bị tốt hơn cho tương lai.</p>
        </main>

        <!-- Sidebar -->
        <aside class="sidebar">
            <h2>Bình luận và viết tại đây</h2>
            <textarea placeholder="Nhập bình luận của bạn" class="comment-box"></textarea>
            <button class="submit-btn">Gửi bình luận</button>

            <h3>Danh sách các bình luận:</h3>
            <ul class="comment-list">
                <li>Ngọc Hà: Bài viết rất thú vị!</li>
                <li>Minh Tuấn: Tôi rất muốn thử tham gia đào tạo quân sự!</li>
                <li>Một thằng đàn ông nào đó: Tôi nghi rằng những Anh cao to đen hôi có thể vào được Nơi này không?</li>
            </ul>
        </aside>
    </div>

</template>

<script>
       export default {
       name: "QuanSu1",
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
    text-align: left; /* Đảm bảo toàn bộ văn bản được căn trái */
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
}
       </style>