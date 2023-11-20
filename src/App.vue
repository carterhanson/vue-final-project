<template>
  <nav class="bg-stone-300">
    <span v-if="GStore.currentUser">
      <b>Hello {{GStore.currentUser.firstName}} &nbsp;</b>
    </span>
    <router-link :to="{name:'home'}" >Home</router-link> |
    <router-link :to="{name: 'UserList'}" v-if="GStore.currentUser?.roleId == 2">
      Users
    </router-link> |
    <router-link v-if="!GStore.currentUser" :to="{name: 'Login'}" >Login</router-link>
    <a v-else @click="logout" href="#">Log Out</a>

  </nav>
  <router-view/>
</template>

<script>
export default {
  inject: ['GStore'],
  methods:{
  	logout(evt){
    	evt.preventDefault();
    	this.GStore.currentUser = null;
    	sessionStorage.removeItem("currentUser");
      this.$router.push({name:"Login"});
  	}
  }
}

</script>


