<template>
    <div>
      <h2>Danh sách bài viết</h2>
      <div
        v-for="(post, index) in posts"
        :key="index"
        :class="{ highlighted: post.title.length > 20 }"
        :style="{ backgroundColor: post.backgroundColor, color: post.textColor }"
        class="post"
      >
       <label>Tiêu đề bài viết</label>
        <h3 class="text-success">{{ post.title }}</h3>
        <label>Tên tác giả</label>
        <h4 class="text-danger">{{ post.author }}</h4>
        <label>Nội dung bài viết</label>
        <p>{{ post.content }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PostListPage',
    props: {
      posts: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style>
  .post {
    padding: 20px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 10px;
  }
  
  .highlighted {
    border: 2px solid lightgray;
  }

  
p {
  direction: ltr;
  text-align: left;
}
.info-display {
  line-height: 1.6;
}

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
  