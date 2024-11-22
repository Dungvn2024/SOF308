<template>
  <div class="app">
    <h1>Đánh giá học lực</h1>
    <div class="form">
      <label for="score">Nhập điểm của bạn:</label>
      <input
        type="number"
        id="score"
        v-model.number="score"
        placeholder="Nhập điểm (0-10)"
      />
      <button @click="evaluateGrade">Xếp loại</button>
    </div>

    <div class="result" v-if="grade">
      <h2>Kết quả: {{ grade }}</h2>
    </div>
  </div>
</template>

<script>
export default {
    name: "Lab6Bai1Page",
  data() {
    return {
      score: null, // Lưu điểm trung bình người dùng nhập
      grade: "",   // Lưu xếp loại tương ứng
    };
  },
  methods: {
    evaluateGrade() {
      if (this.score < 5) {
        this.grade = "Yếu";
      } else if (this.score < 6.5) {
        this.grade = "Trung bình";
      } else if (this.score < 8) {
        this.grade = "Khá";
      } else if (this.score < 9) {
        this.grade = "Giỏi";
      } else if (this.score >= 9) {
        this.grade = "Xuất sắc";
      } else {
        this.grade = "Điểm không hợp lệ";
      }
    },
  },
};
</script>

<style scoped>
.app {
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
}

.form {
  margin-top: 20px;
}

label {
  font-size: 18px;
}

input {
  margin: 10px 0;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.result h2 {
  margin-top: 20px;
  color: #28a745;
}
</style>