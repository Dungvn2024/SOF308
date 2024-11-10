<template>
    <div class="container">
        <Navbar />
        <div class="row mt-4">
          <div class="col-sm-4">
            <Sidebar />
          </div>
          <div class="col-sm-8">
            <MainContact />
          </div>
          <index />
        </div>
        <router-view></router-view>
      </div>
    </template>
    
    <script>
    import Navbar from "./components/Lab3/Navbar.vue"
    import Sidebar from "./components/Lab3/Sidebar.vue"
    import MainContact from "./components/Lab3/MainContact.vue"
    import index from "./components/Lab3/index.vue";
    
    export default {
      name: "App",
      components: {
        Navbar,
        Sidebar,MainContact, index,
      },
    };
    </script>
    
    <style>
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
    
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
    </style>
    