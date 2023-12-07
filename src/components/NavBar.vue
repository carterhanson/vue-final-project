<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex items-center justify-between">
      <span v-if="GStore.currentUser" class="text-white">
        <b>Hello {{ GStore.currentUser.firstName }}</b>
      </span>

      <div class="flex items-center space-x-4">
        <router-link :to="{ name: 'home' }" class="text-white hover:text-gray-300 transition duration-300">Home</router-link>

        <router-link v-if="GStore.currentUser?.roleId == 2" :to="{ name: 'UserList' }" class="text-white hover:text-gray-300 transition duration-300">Users</router-link>

        <router-link v-if="!GStore.currentUser" :to="{ name: 'Login' }" class="text-white hover:text-gray-300 transition duration-300">Login</router-link>

        <a v-else @click="logout" href="#" class="text-white hover:text-gray-300 transition duration-300">Log Out</a>
      </div>
    </div>
  </nav>
</template>

<script>
import {logout as apiLogout} from '../api.js'

export default {
  inject: ['GStore'],
  methods:{
  	logout(evt){
    	evt.preventDefault();
    	this.GStore.currentUser = null;
    	sessionStorage.removeItem("currentUser");
      apiLogout();
      this.$router.push({name:"Login"});
  	}
  }
}
</script>