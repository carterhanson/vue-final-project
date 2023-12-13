<template>
    <div class="workout-list">
        <div class="overflow-x-auto">
            <table class="table table-bordered table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th>Workout Name</th>
                        <th>Notes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="w in workouts" :key="w.workout_name">
                        <td>{{ w.workout_name }}</td>
                        <td>{{  w.notes }}</td>
                        <td>
                            <button class="btn btn-primary btn-sm ml-4" @click="viewWorkout(w.id)">View</button>
                            <button class="btn btn-primary btn-sm ml-4" @click="editWorkout(w.id)">Edit</button>
                            <button class="btn btn-primary btn-sm ml-4">Delete</button>
                        </td>
                    </tr>
                </tbody>
                <div>
                    {{ getUser() }}
                </div>
            </table>
        </div>
    </div>
</template>
  
<script>
import { getWorkoutByUserId } from '@/api';
export default {
    inject: ["GStore"],
    data(){
        return {  
            workouts: {}
        }
    },
    mounted(){
        getAllWorkouts().then(workouts => this.workouts = workouts);
      
    },
    methods: {

    }
};
</script>
  