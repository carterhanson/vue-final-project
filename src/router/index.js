import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserList from '../views/UserList.vue'
import UserDetails from '../views/UserDetails.vue'
import Login from '../views/Login.vue'
import WorkoutForm from '../views/WorkoutForm'
import NotFound from '../views/NotFound.vue'
import AddExercise from '../views/AddExercise.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {title: "Home Page"}
  },
  {
    path: '/users',
    name: 'UserList',
    component: UserList,
    meta: {title: "User List"}

  },
  { 
    path: '/users/:userId',
    name: 'UserDetails',
    component: UserDetails,
    props: true,
    meta: {title: "User Details"}

  },
  { 
    path: '/users/add',
    name: 'AddUser',
    component: UserDetails,
    meta: {title: "Add User"}

  },
  { 
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {title: "Login"}

  },
  {
    path: '/workout-form',
    component: WorkoutForm,
    meta: {title: "Workout Form"}

  },
  { 
    path:"/404",
    component: NotFound, 
    name:"NotFound",
    meta: {title: "Not Found"}

  },
  { 
    path:"/:catchAll(.*)", 
    redirect: "/404",
  },
  {
    path: "/add-exercise",
    component: AddExercise,
    meta: {title: "Add Exercise"}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title || "NO PAGE TITLE SET!";
});

export default router
