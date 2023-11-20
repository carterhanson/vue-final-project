<template>
  <div class="hero-banner flex bg-stone-400 text-blue-500 p-4 items-center">
    <h1 class="text-3xl font-bold flex-grow">{{ title }}</h1>
    <button @click="addWorkout" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
      + Add Workout
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "My Workouts",
    };
  },
  methods: {
    addWorkout() {
      // Handle the logic for adding a new workout
      // You may emit an event or use a router link to navigate to the workout form
      this.$router.push('/workout-form');
    },
  },
};
</script>
