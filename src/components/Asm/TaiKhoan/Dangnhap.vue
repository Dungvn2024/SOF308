<template>
    <!-- Login Form -->
    <div class="col-md-6">
            <div class="card p-4">
                <h5 class="card-title">Form Đăng Nhập</h5>
                <form>
                    <div class="mb-3">
                        <label for="loginEmail" class="form-label">Email</label>
                        <input type="email" class="form-control" id="loginEmail" placeholder="Nhập email">
                    </div>
                    <div class="mb-3">
                        <label for="loginPassword" class="form-label">Mật Khẩu</label>
                        <input type="password" class="form-control" id="loginPassword" placeholder="Nhập mật khẩu">
                    </div>
                    <button type="submit" class="btn btn-primary">Đăng Nhập</button>
                </form>
            </div>
        </div>
    </template>
    
    <script>
    export default {
    name: "DangNhap",
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