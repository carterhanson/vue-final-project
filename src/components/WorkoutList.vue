<template>
    <div class="workout-list">
        <div class="overflow-x-auto">
            <table class="table table-bordered table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th>Workout Name</th>
                        <th>Exercises</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="w in workouts" :key="w.id">
                        <td>{{ w.workout_name }}</td>
                        <td> {{  }}</td>
                        <td>
                            <button class="btn btn-primary btn-sm">Edit</button>
                            <button class="btn btn-primary btn-sm ml-4">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
  
<script>
import { getAllWorkoutExercises, getAllWorkouts, getExerciseById, getWorkoutById } from '@/api';
export default {
    inject: ['GStore'],
    data(){
        return {
            workoutExercises: [],
            exercises: [],
            workouts: []
        }
    },
    mounted(){
        getAllWorkoutExercises().then(workoutExercises => this.workoutExercises = workoutExercises);
        getAllWorkouts().then(workouts => this.workouts = workouts);
        
    },
    methods: {
        
    }
};
</script>
  