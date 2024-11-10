<template>
    <div class="col-sm-4">
    <h2 class="text-info mb-3">Về tôi</h2>
    <div class="card blog">
        <img src="../../../Lab1 - Tai Nguyen/images/avatar.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Giới thiệu bản thân</h5>
            <p class="card-text">TS. Trần Hoàng, Tổ chức Tư vấn sức khỏe quốc tế độc lập<br>
                Châm ngôn: Ta không được chọn nơi mình sinh ra, nhưng ta được chọn cách mình sẽ sống
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
</div>
    </template>
    
    <script>
    export default {
    name: 'SidebarPage'
    }
    </script>
    
    <style>
    
    </style>