import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserList from '../views/UserList.vue'
import UserDetails from '../views/UserDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/users',
    name: 'UserList',
    component: UserList
  },
  { 
    path: '/users/:userId',
    name: 'UserDetails',
    component: UserDetails,
    props: true 
  },
  { path: '/users/add',
    name: 'AddUser',
    component: UserDetails  
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
