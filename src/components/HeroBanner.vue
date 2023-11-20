<template>
  <div class="hero-banner bg-blue-500 text-white p-4 text-center">
    <h1 class="text-3xl font-bold">{{ title }}</h1>
    <button @click="addWorkout" class="bg-green-500 text-white px-4 py-2 mt-4 rounded-full">
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
      console.log("Add Workout clicked!");
    },
  },
};
</script>
