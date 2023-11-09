<template>
  <nav>
    <router-link :to="{name:'home'}">Home</router-link> |
    <router-link :to="{name: 'UserList'}">Users</router-link>

  </nav>
  <router-view/>
</template>

<style>

</style>
