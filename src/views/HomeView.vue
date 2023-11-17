<template>
  <div class="home">
    <HelloWorld/>
    <WorkoutList />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import WorkoutList from '@/components/WorkoutList.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    WorkoutList
  }
}
</script>
