<template>
    <div class="container">
        <h3>Nhập tháng của bạn:</h3>
        <input type="number" v-model.number="month" />
        <p v-if="month < 1 || month > 12" style="color: red">Vui lòng hãy nhập từ tháng 1 đến tháng 12!</p>
        <p v-else-if="month >= 1 && month <= 3">Mùa Xuân</p>
        <p v-else-if="month <= 6">Mùa Hè</p>
        <p v-else-if="month <= 9">Mùa Thu</p>
        <p v-else>Mùa Đông</p>
    </div>
  </template>
  
  <script setup>
  
  import { ref } from 'vue';
  
  const month = ref('1');

  </script>

  <script>
  export default {
    name: "Lab6Bai2Page",
  };
</script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 50px auto;
    padding: 0 20px;
  }
  
  .input-month {
    padding: 10px;
    margin: 10px;
    font-size: 16px;
    width: 200px;
  }
  
  .check-btn {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .check-btn:hover {
    background-color: #45a049;
  }
  
  .result {
    margin-top: 20px;
    font-size: 20px;
    color: #333;
  }
  </style>