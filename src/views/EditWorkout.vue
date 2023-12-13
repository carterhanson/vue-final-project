<template>
  <div class="mt-5 max-w-md mx-auto p-4 bg-white rounded-md shadow-lg">
    <h3 class="text-2xl font-semibold mb-4">Edit Workout</h3>
    <form @submit.prevent="onSubmit" class="space-y-4">
      <div>
        <label for="workout-name" class="block text-sm font-medium text-gray-600">Workout Name:</label>
        <input v-model="workout.workout_name" type="text" id="workout-name" required
               class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500">
      </div>
      <div>
        <label for="workout-notes" class="block text-sm font-medium text-gray-600">Notes:</label>
        <textarea v-model="workout.notes" id="workout-notes"
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"></textarea>
      </div>
      <div class="flex justify-end items-center">
        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring">Save Changes</button>
        <button @click="cancelEdit" class="ml-4 text-gray-500 hover:text-gray-900">Cancel</button>
      </div>
    </form>
  </div>
</template>
<script>
import { getWorkoutById, updateWorkout } from '@/api';

export default {
  props: ['workoutId'],
  data() {
    return {
      workout: {},
      errors: {}
    };
  },
  mounted() {
    getWorkoutById(this.workoutId).then(workout => this.workout = workout);
  },
  methods: {
    onSubmit() {
      if(this.isValid()){
        updateWorkout(this.workout).then(()=> {
            console.log('Workout updated successfully!');
            this.$router.push({path: '/'});
        })
      }
    },
    cancelEdit() {
      // Redirect back to the view workout page without saving changes
      this.$router.push({ path: '/' });
    },
    isValid(){
        return true;
    }
  },
};
</script>