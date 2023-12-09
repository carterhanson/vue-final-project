<template>
    <div>
        <h2> {{  workout.workout_name }}</h2>
        <div>
            <button type="button" @click="addExercise(workout.id)" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded-full">
                + Add Exercise
            </button>
        </div>
        <ul>
            <li v-for="e in exercises" :key="e.id">
                <h3>{{ e.exercise_name }}</h3>
                <p>Sets: {{ e.sets }}</p>
                <p>Weight: {{  e.weight }}</p>
                <p>Reps: {{ e.repetitions }}</p>
                <p>Notes: {{ e.notes }}</p>
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
            workout: [],
            exercises: []

        }
    },
    mounted(){
        getWorkoutById(this.workoutId).then(workout => this.workout = workout);
        getExercisesByWorkoutId(this.workoutId).then(exercises => this.exercises = exercises);
    },
    methods: {
        addExercise(id){
            this.$router.push({name: 'AddExercise', params: {workoutId: id}})
        }
    }
}
</script>