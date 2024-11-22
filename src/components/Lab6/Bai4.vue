<template>
    <div class="container mt-5">
      <div class="row">
        <!-- Form thêm/sửa thông tin học sinh -->
        <form @submit.prevent="submitForm" class="col-sm-4">
          <h3>Thêm học sinh</h3>
          <div class="mb-3">
            <label for="name">Họ tên:</label> <br> <br>
            <input type="text" class="form-control" v-model="student.name" id="name" required />
          </div>
          <div class="mb-3">
            <label for="score">Điểm:</label> <br> <br>
            <input type="number" class="form-control" v-model="student.score" id="score" min="0" max="10" required />
          </div>
          <div class="mb-3">
            <label for="dob">Ngày sinh:</label> <br> <br>
            <input type="date" class="form-control" v-model="student.dob" id="dob" required />
          </div>
          <button type="submit" class="btn btn-success">{{ isEditing ? 'Cập nhật' : 'Thêm' }}</button>
        </form>
  
        <!-- Danh sách học sinh -->
        <div class="col-sm-8">
          <h3>Danh sách học sinh</h3>
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Họ và tên</th>
                <th>Điểm</th>
                <th>Ngày sinh</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(stu, index) in students" :key="index">
                <td>{{ stu.name }}</td>
                <td>{{ stu.score }}</td>
                <td>{{ stu.dob }}</td>
                <td>
                  <button class="btn btn-warning" @click="editStudent(index)">Sửa</button>
                  <button class="btn btn-danger" @click="deleteStudent(index)">Xóa</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  name: "Lab6Bai4Page",
};
</script>

<script setup>
import { ref } from 'vue';

// Dữ liệu mẫu ban đầu
const students = ref([
  { name: 'Nguyễn Chí Hùng', score: 8, dob: '2006-01-01' },
  { name: 'Phạm Thị Lan', score: 9, dob: '2006-05-15' }
]);

// Biến quản lý trạng thái form
const student = ref({
  name: '',
  score: null,
  dob: ''
});
let isEditing = ref(false);
let editingIndex = ref(null);

// Xử lý sự kiện submit form
function submitForm() {
  if (isEditing.value) {
    // Cập nhật thông tin học sinh
    students.value[editingIndex.value] = { ...student.value };
    isEditing.value = false;
    editingIndex.value = null;
  } else {
    // Thêm học sinh mới
    students.value.push({ ...student.value });
  }
  resetForm();
}

// Chỉnh sửa học sinh
function editStudent(index) {
  student.value = { ...students.value[index] };
  isEditing.value = true;
  editingIndex.value = index;
}

// Xóa học sinh
function deleteStudent(index) {
  students.value.splice(index, 1);
}

// Reset form
function resetForm() {
  student.value = {
    name: '',
    score: null,
    dob: ''
  };
}
</script>

<style scoped>
.form-control {
  width: auto;
  flex-grow: 1;
}

label {
  margin-right: 10px;
  font-weight: bold;
}

.mb-3 {
  display: flex;
  align-items: center; /* Canh giữa theo trục dọc */
  justify-content: flex-start; /* Căn từ trái sang */
  margin-bottom: 1rem;
}
</style>