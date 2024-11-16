
<template>
  <div class="container mt-5">
    <h3 class="text-center" style="color: #e94e1b;">Bảng Thành Phần Dinh Dưỡng</h3>
    <table class="table table-bordered text-center">
        <thead>
            <tr style="background-color: #ffc107;">
                <th rowspan="2" class="align-middle">Thành Phần</th>
                <th colspan="2">Giá Trị</th>
            </tr>
            <tr style="background-color: #ffc107;">
                <th>Khối Lượng</th>
                <th>% DV*</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Calories</td>
                <td>200 kcal</td>
                <td>20%</td>
            </tr>
            <tr>
                <td>Chất Béo</td>
                <td>9 g</td>
                <td>14%</td>
            </tr>
            <tr>
                <td style="padding-left: 20px;">Chất Béo Bão Hòa</td>
                <td>4 g</td>
                <td>20%</td>
            </tr>
            <tr>
                <td>Chất Đạm</td>
                <td>8 g</td>
                <td>16%</td>
            </tr>
            <tr>
                <td>Chất Xơ</td>
                <td>5 g</td>
                <td>20%</td>
            </tr>
            <tr>
                <td>Đường</td>
                <td>12 g</td>
                <td>20%</td>
            </tr>
            <tr>
                <td rowspan="2">Vitamin</td>
                <td>Vitamin C</td>
                <td>25%</td>
            </tr>
            <tr>
                <td>Vitamin D</td>
                <td>10%</td>
            </tr>
        </tbody>
    </table>
</div>

</template>
    
    <script>
    
    export default {
    name: "Lab2Bai1Page",
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