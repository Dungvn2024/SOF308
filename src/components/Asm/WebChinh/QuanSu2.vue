<template>
    <div class="container">
        <!-- Main Content -->
        <main class="main-content">
            <h1 class="title">Những luật lệ bạn cần phải tuân theo trước khi bạn vào quân sự</h1>
            <img src="../images/QuanSu3.jpg" alt="Military Rules" class="main-image">
            
            <p>Khi tham gia môi trường quân sự, việc tuân thủ các luật lệ là điều kiện tiên quyết để duy trì kỷ luật và tổ chức. Dưới đây là những quy định quan trọng mà bạn cần biết trước khi bước vào môi trường này.</p> <br> <br>
            <p>Luật lệ quân sự là những quy tắc, quy định và mệnh lệnh được đặt ra để duy trì trật tự, kỷ luật và hiệu quả hoạt động trong lực lượng vũ trang của một quốc gia. Những luật lệ này được xây dựng dựa trên luật pháp quốc gia, các quy định quốc tế và truyền thống quân đội nhằm bảo đảm sự thống nhất và tổ chức trong hàng ngũ quân nhân.</p>
            <h2 class="section-title">1. Tuân thủ nội quy chung</h2>
            <p>Trong quân đội, mọi cá nhân đều phải tuân thủ nghiêm ngặt các nội quy chung, bao gồm giờ giấc sinh hoạt, quy tắc giao tiếp và các tiêu chuẩn vệ sinh cá nhân.</p>
            
            <h2 class="section-title">2. Tôn trọng cấp trên và đồng đội</h2>
            <p>Một trong những nguyên tắc quan trọng nhất trong môi trường quân sự là tôn trọng và chấp hành mệnh lệnh từ cấp trên, đồng thời duy trì tinh thần đồng đội với các chiến hữu.</p>
            <img src="../images/QuanSu4.jpg" alt="Respect in Military" class="section-image">

            <h3 class="section-title">3. Cấm sử dụng các vật dụng không được phép</h3>
            <p>Trước khi vào quân sự, bạn cần lưu ý về danh sách các vật dụng bị cấm mang theo, như thiết bị điện tử không cần thiết, các chất kích thích hoặc đồ vật nguy hiểm.</p>

            <h3 class="section-title">4. Thực hiện đúng quy trình đăng ký và kiểm tra y tế</h3>
            <p>Bạn cần hoàn thành đầy đủ các thủ tục hành chính, giấy tờ cần thiết và vượt qua các vòng kiểm tra y tế trước khi chính thức tham gia.</p>

            <h3 class="section-title">Lời kết</h3>
            <p>Việc nắm rõ và tuân thủ các luật lệ không chỉ giúp bạn dễ dàng hòa nhập vào môi trường quân sự mà còn thể hiện tinh thần trách nhiệm và sự nghiêm túc của bạn trong quá trình đào tạo.</p>
        </main>

        <!-- Sidebar -->
        <aside class="sidebar">
            <h2>Bình luận và viết tại đây</h2>
            <textarea placeholder="Nhập bình luận của bạn" class="comment-box"></textarea>
            <button class="submit-btn">Gửi bình luận</button>

            <h3>Danh sách các bình luận:</h3>
            <ul class="comment-list">
                <li>Hữu Phát: Những thông tin rất hữu ích!</li>
                <li>Lan Anh: Mình sẽ ghi nhớ các luật lệ này!</li>
            </ul>
        </aside>
    </div>
</template>

<script>
    export default {
        name: "QuanSu2",
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