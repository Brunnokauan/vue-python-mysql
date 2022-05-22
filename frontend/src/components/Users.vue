<template>
  <div class="container">
    <h3>All Users</h3>
    <div v-if="message" class="alert alert-success">{{ this.message }}</div>
    <div class="container">
      <table class="table text-center align-middle">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="emp in emps" v-bind:key="emp.id">
            <td>{{ emp.name }}</td>
            <td>{{ emp.phone }}</td>
            <td>{{ emp.address }}</td>
            <td>
              <button class="btn btn-warning" v-on:click="updateUser(emp.id)">
                <i class="bi bi-arrow-up-left-square-fill"></i>
              </button>
            </td>
            <td>
              <button class="btn btn-danger" v-on:click="deleteUser(emp.id)">
               <i class="bi bi-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button class="btn btn-primary" v-on:click="addUser()">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import UserDataService from "../service/UserDataService";
export default {
  name: "UsersView",
  data(){
    return{
        emps: [],
        message: "",
    };
  },

  methods: {
    refreshUsers(){
      UserDataService.retrieveAllUsers().then((res) => {
        this.emps = res.data;
      });
    },
    addUser(){
      this.$router.push(`/user/-1`);
    },
    updateUser(id){
      this.$router.push(`/user/${id}`);
    },
    deleteUser(id){
      UserDataService.deleteUser(id).then(() => {
          this.refreshUsers();
      });
    }
  },
  created(){
      this.refreshUsers();
  }
    
}
</script>