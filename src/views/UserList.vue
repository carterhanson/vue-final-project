<template>
    <div class="user-list">
      <div class="overflow-x-auto">
        <table class="table table-bordered table-hover">
          <thead class="thead-dark">
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="u in users" :key="u.id">
              <td>{{ u.firstName + " " + u.lastName }}</td>
              <td>{{ u.email }}</td>
              <td>{{ getRoleNameById(u.roleId) }}</td>
              <td>
                <span :class="{'text-success': u.active, 'text-danger': !u.active}">
                  {{ u.active ? "Yes" : "No" }}
                </span>
              </td>
              <td>
                <button class="btn btn-primary btn-sm" @click="editUser(u.id)">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>


<script>
import {getAllUsers, getAllRoles} from "@/api"

export default {
    data(){
        return {
            users: [],
            roles:[]
        }
    },
    mounted(){
        getAllUsers().then(users => this.users = users);
        getAllRoles().then(roles => this.roles = roles);
    },
    methods:{
        getRoleNameById(id){
          const role = this.roles.find(r => r.id == id);
          return role?.name;
          // Note the nullish operator - I noticed that this method gets called even before the roles have been fetched!
        },
        editUser(id){
          this.$router.push({name:'UserDetails', params: {userId:id}});
        }
    }
}
</script>

<style scoped>
  /*Put CSS styles here*/
</style>