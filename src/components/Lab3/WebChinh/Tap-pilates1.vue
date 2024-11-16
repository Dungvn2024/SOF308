<template>
     <div class="container">
        <!-- Main Content -->
        <main class="main-content">
            <h1 class="title">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống</h1>
            <img src="../images/tap-pilates1.jpg" alt="Pilates" class="main-image">
            
            <p>Tập Pilates có thể còn khá xa lạ với người Việt, nhưng tại các nước phương Tây thì đây chính là phương pháp tập đặc trị giúp giữ lưng, cột sống ở vị trí cân bằng và cải thiện sự linh hoạt, dẻo dai cho người tập. Bài viết này giới thiệu về các phương pháp tập Pilates có khả năng hỗ trợ điều trị đau lưng, giúp phục hồi chấn thương cột sống nhanh chóng.</p>
            
            <h2 class="section-title">Pilates giúp phục hồi chấn thương cột sống nhanh chóng</h2>
            <p>Một trong những căn bệnh nguy hiểm đối với dân văn phòng là đau lưng, thoát vị đĩa đệm. Tuy nhiên, điều trị không đúng cách có thể dẫn đến nhiều biến chứng nguy hiểm, bao gồm: Vỡ đĩa đệm, tổn thương thần kinh, và nhiều vấn đề khác.</p>
            <img src="../images/tap-pilates2.jpg" alt="Pilates Cat Cow" class="section-image">

            <h3 class="section-title">Phương pháp tập Pilates Cat Cow</h3>
            <p>Các bước thực hiện:</p>
            <ul>
                <li>Bắt đầu với tư thế 4 điểm.</li>
                <li>Vào tư thế đẩy lưng lên, nâng cằm lên, mở rộng ngực.</li>
                <li>Giữ nhịp thở và hạ lưng xuống.</li>
                <li>Lặp lại khoảng từ 5 đến 7 lần.</li>
            </ul>

            <h3 class="section-title">Lời kết</h3>
            <p>Tóm lại, phương pháp tập Pilates giúp phục hồi chấn thương cột sống hiệu quả. Để đạt được kết quả tốt, người tập cần thực hiện đều đặn.</p>
        </main>

        <!-- Sidebar -->
        <aside class="sidebar">
            <h2>Bình luận và viết tại đây</h2>
            <textarea placeholder="Nhập bình luận của bạn" class="comment-box"></textarea>
            <button class="submit-btn">Gửi bình luận</button>

            <h3>Danh sách các bình luận:</h3>
            <ul class="comment-list">
                <li>Bình An: Bài viết rất hữu ích</li>
                <li>Bình An: Cảm ơn những chia sẻ bổ ích</li>
            </ul>
        </aside>
    </div>
</template>

<script>
        export default {
        name: "Lab3TapPilates1",
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