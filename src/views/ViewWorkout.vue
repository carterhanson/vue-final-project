<template>
  <div class="max-w-2xl mx-auto mt-8 p-6 bg-gray-100 shadow-lg rounded-md w-3/5">
    <!-- Changed background color to a light gray -->

    <h2 class="text-3xl font-semibold mb-4 text-gray-800"> {{ workout.workout_name }} </h2>

    <div>
      <button
        type="button"
        @click="addExercise()"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
      >
        + Add Exercise
      </button>
    </div>

    <ul class="mt-4 space-y-4">
      <li v-for="e in exercises" :key="e.id" class="border p-4 rounded-md bg-white">
        <!-- Added background color to list items for better separation -->

        <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ e.exercise_name }}</h3>
        <p class="text-gray-700">Sets: {{ e.sets }}</p>
        <p class="text-gray-700">Weight: {{ e.weight }}</p>
        <p class="text-gray-700">Reps: {{ e.repetitions }}</p>
        <p class="text-gray-700">Notes: {{ e.notes }}</p>

        <button
          type="button"
          @click="editExercise(e.id)"
          class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 mt-2 rounded-md"
        >
          Edit
        </button>
      </li>
    </ul>
  </div>
</template>




<script>
import { getWorkoutById, getExercisesByWorkoutId} from "@/api";
export default {
    props: ["workoutId"],
    data(){
        return{
            workout: {},
            exercises: {}

        }
    },
    mounted(){
        getWorkoutById(this.workoutId).then(workout => this.workout = workout);
        getExercisesByWorkoutId(this.workoutId).then(exercises => this.exercises = exercises);
        console.log(this.workoutId)
        console.log(this.exerciseId)
        
    },
    methods: {
        addExercise(){
            const workoutId = this.workout.id;
            this.$router.push({name: 'AddExercise', params: {workoutId}});
        },
        editExercise(id){
            this.$router.push({name: 'EditExercise', params: {exerciseId: id}});
        }
    }
}
</script>