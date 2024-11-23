<template>
    <div class="p-5">
    <p>{{ message }}</p>
    <button class="btn btn-dark" @click="updateMessage">Thay đổi thông điệp</button>
    </div>
    </template>

    <script>
    export default {
    name: "Lab5Bai1Page",
    };
    </script>

    <script setup>
    import { ref } from 'vue';
    const message = ref('Thông điệp ban đầu');
    const updateMessage = () => {
    message.value = 'Thông điệp đã được thay đổi!';
    };
    </script>