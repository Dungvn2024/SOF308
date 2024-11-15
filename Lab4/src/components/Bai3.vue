<template>
<!-- Hiển thị lời chào -->
<h1>{{ greeting }}</h1>

<button v-bind:title="buttonTitle" @click="changeGreeting">Click để thay
    đổi</button>
   </template>
   

       <script>
       export default {
       name: "Lab4Bai3Page",

       data() {
        return {
            greeting: 'Xin chào bạn!',
            buttonTitle: 'Nhấn để thay đổi lời chào'
        };
    },
    methods: {
        changeGreeting() {
            this.greeting = 'Hello, World!';
            this.buttonTitle = 'Lời chào mới đã được cập nhật';
        }
    }
};


       </script>
       <style>
       h1{color: red;}
       </style>