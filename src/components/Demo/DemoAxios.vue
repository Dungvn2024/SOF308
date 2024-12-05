<template>
    <div class="container mt-5">
      <h2 class="text-center">User List</h2>
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Admin</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.fullname }}</td>
            <td>{{ user.email }}</td>
            <td>
              <span v-if="user.admin" class="badge bg-success">Admin</span>
              <span v-else class="badge bg-secondary">User</span>   
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button @click="getUsers">Get Users</button>
</template>

<script setup>
import { ref } from "vue";
const users = ref();
// function
const getUsers = () => {
  // eslint-disable-next-line
  axios
    .get("http://172.16.37.89:8080/Java4_02/KetNoi")
    .then(function (response) {
      // handle success
      users.value = response.data;
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
};

getUsers();
</script>

<script>
    
    export default {
    name: "DemoAxiosPage",
    };
    </script>

<style></style>