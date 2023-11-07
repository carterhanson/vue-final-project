<template>
  <div v-if="user" class="max-w-md mx-auto p-4 bg-white rounded-md shadow-lg">
    <form @submit.prevent="onSubmit" class="space-y-4">
      <div>
        <label class="block font-medium">First Name:</label>
        <input v-model="user.firstName" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500">
      </div>

      <div>
        <label class="block font-medium">Last Name:</label>
        <input v-model="user.lastName" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500">
      </div>

      <div>
        <label class="block font-medium">Email:</label>
        <input v-model="user.email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500">
      </div>

      <div>
        <label class="block font-medium">Password:</label>
        <input type="password" v-model="user.password" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500">
      </div>

      <div>
        <label class="block font-medium">Role:</label>
        <select v-if="roles.length > 0" v-model="user.roleId" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500">
          <option v-for="r in roles" :key="r.id" :value="r.id">{{ r.name }}</option>
        </select>
      </div>

      <div>
        <label class="block font-medium">Active:</label>
        <input type="checkbox" v-model="user.active" class="mt-2">
      </div>

      <div class="flex justify-between items-center">
        <button type="submit" id="btnSubmit" name="submit button" class="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-full focus:outline-none focus:ring">Submit</button>
        <button type="button" @click="$router.push({ name: 'UserList' })" class="text-gray-500 hover:text-gray-700">Cancel</button>
      </div>
    </form>
  </div>
</template>


<script>
import {getUserById, getAllRoles, updateUser, insertUser} from "@/api"

export default {
  props:["userId"],
  data(){
      return{
          user:null,
          roles:[]
      }
  },
  mounted(){

    getAllRoles().then(roles => this.roles = roles);

    if(this.userId > 0){
      getUserById(this.userId).then(user => this.user = user);
    }else{
      // if the userId prop was not passed in, then we are creating a new empty user
      this.user = {id:0, firstName:"", lastName:"", email:"", password:"", roleId:1, active: true};
    }
  },
  methods:{
      onSubmit() {
        if(this.isValid()){
          if(this.userId > 0){
            updateUser(this.user).then(resp => this.$router.push({name: 'UserList'}));
          }else{
            insertUser(this.user).then(resp => this.$router.push({name: 'UserList'}));
          }
        }
      },
      isValid(){
        if(!this.user.firstName || !this.user.lastName || !this.user.email || !this.user.password){
            return false;
        }
        return true;
      }
  }
}
</script>
