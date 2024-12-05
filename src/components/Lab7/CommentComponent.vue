<template>
    <div class="col-sm-6">
      <h2>Bình luận bài viết</h2>
      <div class="card">
        <img src="./images/img1.jpg" alt="Hình ảnh" />
        <div class="card-body">
          <h3 class="card-title">8 loại rau củ quả giàu canxi</h3>
          <p class="card-text">
            Canxi là khoáng chất rất cần thiết cho cơ thể con người... 
          </p>
        </div>
      </div>
  
      <form @submit.prevent="submitComment" class="mt-3">
        <textarea id="commentText" v-model="commentText" class="form-control" placeholder="Nhập bình luận của bạn"></textarea>
        <button type="submit" class="btn btn-success mt-2">Gửi bình luận</button>
      </form>
  
      <div v-if="comments.length" class="mt-3">
        <h3>Danh sách các bình luận:</h3>
        <ul style="list-style-type: circle">
          <li v-for="(comment, index) in comments" :key="index">
            <p><strong>{{ comment.name }}</strong>: {{ comment.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { defineProps } from 'vue';
  
  // Props nhận tên người dùng từ component cha
  const props = defineProps(['username']);
  
  const commentText = ref('');
  const comments = ref([]);
  
  function submitComment() {
    if (commentText.value) {
      // Thêm bình luận mới
      comments.value.push({
        name: props.username,
        text: commentText.value
      });
  
      // Reset trường nhập liệu
      commentText.value = '';
    }
  }
  </script>
  

<script>
export default {
  name: "Lab7Bai42Page",
};
</script>