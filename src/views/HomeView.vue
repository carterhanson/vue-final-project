<template>
  <div class="home">
    <HeroBanner/>
    <WorkoutList />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroBanner from '@/components/HeroBanner.vue'
import WorkoutList from '@/components/WorkoutList.vue'

export default {
  name: 'HomeView',
  components: {
    HeroBanner,
    WorkoutList
  }
}
</script>
