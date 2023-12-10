<template>
  <div class="mt-5 max-w-md mx-auto p-4 bg-white rounded-md shadow-lg">
    <form @submit.prevent="onSubmit" class="space-y-4">
      <h3 class="text-lg font-semibold mb-2">Edit Exercise</h3>

      <div>
        <label for="exercise-name" class="block font-medium">Exercise Name:</label>
        <span class="text-danger">{{ errors.exercise_name }}</span>
        <input type="text" v-model="exercise.exercise_name" required class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500">
      </div>

      <div>
        <label for="sets" class="block font-medium">Sets</label>
        <span class="text-danger">{{ errors.sets }}</span>
        <input type="text" v-model="exercise.sets" required class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500">
      </div>

      <div>
        <label for="reps" class="block font-medium">Reps</label>
        <span class="text-danger">{{ errors.repetitions }}</span>
        <input type="text" v-model="exercise.repetitions" required class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500">
      </div>

      <div>
        <label for="weight" class="block font-medium">Weight</label>
        <span class="text-danger">{{ errors.weight }}</span>
        <input type="text" v-model="exercise.weight" required class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500">
      </div>
                        
      <div class="mb-4">
        <label for="exercise-notes" class="block font-medium">Notes:</label>
        <span class="text-danger">{{ errors.notes }}</span>
        <textarea v-model="exercise.notes" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500" rows="4"></textarea>
      </div>

      <div class="flex justify-between items-center">
        <button type="submit" name="submit button" class="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-full focus:outline-none focus:ring">Save Changes</button>
        <button type="button" @click="$router.push({ path: '/' })" class="text-gray-500 hover:text-gray-900">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import { updateExercise, getExerciseById } from '@/api';

export default {
  props: ['exerciseId'],
  data() {
    return {
      exercise: {},
      errors: {},
    };
  },
  mounted() {
    getExerciseById(this.exerciseId).then(exercise => this.exercise = exercise);
  },
  methods: {
    onSubmit() {
      if (this.isValid()) {
        updateExercise(this.exercise).then(() => {
          // Handle successful update, e.g., show a success message
          console.log('Exercise updated successfully!');
          // Navigate back to the workout view or another appropriate page
          this.$router.push({ path: '/view-workout/' + this.exercise.workout_id });
        });
      }
    },
    isValid() {
      
      return true; // Replace with your validation logic
    },
  },
};
</script>