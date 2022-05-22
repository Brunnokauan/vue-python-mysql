<template>
  <div>
    <h3>User</h3>
    <div class="container">
      <form @submit="validateAndSubmit" >
        <div v-if="errors.length">
          <div
            class="alert alert-danger"
            v-bind:key="index"
            v-for="(error, index) in errors"
          >
            {{ error }}
          </div>
        </div>
        <fieldset class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" v-model="name"/>
        </fieldset>
        <fieldset class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" v-model="email" />
        </fieldset>
        <fieldset class="form-group">
          <label>Phone</label>
          <input type="text" class="form-control" v-model="phone"/>
        </fieldset>
        <fieldset class="form-group">
          <label>Address</label>
          <input type="text" class="form-control" v-model="address"/>
        </fieldset>
        <div class="mt-2"><button class="btn btn-success" type="submit">Save</button></div>
      </form>
    </div>
  </div>
</template>

<script>
import UserDataService from "../service/UserDataService";
export default {
  name: "UserView",
  data(){
    return{
      name: "",
      email: "",
      phone: "",
      address: "",
      errors: [],
    };
  },
  computed:{
    id(){
      return this.$route.params.id;
    },
  },
  methods:{
    refreshUserDetails(){
      if(this.id != -1){
          UserDataService.retrieveUser(this.id).then((res) => {
              this.name = res.data.name;
              this.email = res.data.email;
              this.phone = res.data.phone;
              this.address = res.data.address;
          });
      }
    },

    validateAndSubmit(e){
      e.preventDefault();
      this.errors = [];
      if(!this.name){
          this.errors.push("Enter valid values");
      } else if (this.name.length < 3) {
          this.errors.push("Enter atleast 3 characters in First Name");
      }

      if (this.errors.length === 0){
        if(this.id == -1){
          UserDataService.createUser({
              name: this.name,
              email: this.email,
              phone: this.phone,
              address: this.address,
          }).then(() => {
              this.$router.push("/users");
          })
        } else {
          UserDataService.updateUser(this.id, {
              id: this.id,
              name: this.name,
              email: this.email,
              phone: this.phone,
              address: this.address,
          }).then(() => {
              this.$router.push("/users");
          });
        }
      }
    }
  },
  created(){
  this.refreshUserDetails();
  },
};
</script>