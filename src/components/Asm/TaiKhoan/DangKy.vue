<template>
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

    </template>
    
    <script>
    export default {
    name: "DangKy",
    };
    </script>
    
    <style>
    /* Styling for cards */
.card {
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

/* Styling for form labels */
.form-label {
    font-weight: bold;
    color: #333;
}

/* Button styles */
.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    border-radius: 5px;
}

.btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
}

/* Adjust form spacing */
.mb-3 {
    margin-bottom: 1.5rem;
}

.form-check-label {
    font-weight: normal;
}

/* Container spacing */
.container {
    max-width: 900px;
}


.container.mt-3 {
    margin-top: 30px;
    font-size: 1.1rem;
}

/* Modal Header */
.modal-header {
    background-color: #f1f1f1;
    border-bottom: 1px solid #dee2e6;
    padding: 15px 20px;
}

.modal-title {
    font-weight: bold;
    color: #333;
    font-size: 1.5rem;
}

/* Close Button in Modal */
.modal-header .btn-close {
    color: #333;
}

/* Style for Nav Tabs */
.nav-tabs .nav-link {
    color: #007bff;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 12px 25px;
    transition: background-color 0.3s ease;
    border-radius: 0;
}

.nav-tabs .nav-link:hover {
    background-color: #e9ecef;
}

.nav-tabs .nav-link.active {
    background-color: #007bff;
    color: #fff;
    border: 1px solid #007bff;
}

/* Style for Tab Content */
.tab-content {
    padding: 25px;
    border: 1px solid #dee2e6;
    border-top: none;
    background-color: #fff;
}

/* Form Controls inside Modal */
.modal-body .form-control {
    border-radius: 0;
    border: 1px solid #ced4da;
    font-size: 1.1rem;
    padding: 12px;
}

/* Submit Button */
.modal-body .btn-primary {
    font-size: 1.2rem;
    padding: 10px 20px;
    background-color: #007bff;
    border: none;
    transition: background-color 0.3s ease;
}

.modal-body .btn-primary:hover {
    background-color: #0056b3;
}

/* Additional Form Styling */
.form-label {
    font-weight: bold;
    color: #555;
    font-size: 1.1rem;
}

.form-control:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

/* Overall Form Layout Adjustments */
.modal-body {
    font-size: 1.1rem;
}
    </style>