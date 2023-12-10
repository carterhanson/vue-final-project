<template>
  <div class="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-md">
    <h2 class="text-2xl font-semibold mb-4">{{ workout.workout_name }}</h2>
    
    <div>
      <button
        type="button"
        @click="addExercise(workout.id)"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
      >
        + Add Exercise
      </button>
    </div>
    
    <ul class="mt-4 space-y-4">
      <li v-for="e in exercises" :key="e.id" class="border p-4 rounded-md">
        <h3 class="text-lg font-semibold">{{ e.exercise_name }}</h3>
        <p class="text-gray-600">Sets: {{ e.sets }}</p>
        <p class="text-gray-600">Weight: {{ e.weight }}</p>
        <p class="text-gray-600">Reps: {{ e.repetitions }}</p>
        <p class="text-gray-600">Notes: {{ e.notes }}</p>
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
    },
    methods: {
        addExercise(id){
            this.$router.push({name: 'AddExercise', params: {exerciseId: id}});
        },
        editExercise(id){
            this.$router.push({name: 'EditExercise', params: {exerciseId: id}});
        }
    }
}
</script>