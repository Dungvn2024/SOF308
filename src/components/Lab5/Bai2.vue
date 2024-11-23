<template>
    <div>
    <input v-model="userInput" placeholder="Nhập dữ liệu vào đây" />
    <p>Giá trị bạn nhập: {{ userInput }}</p>
    </div>
    </template>
    

    <script>
    export default {
    name: "Lab5Bai2Page",
    };
    </script>

<script setup>
import { ref } from 'vue';
const userInput = ref('FPL');
</script>