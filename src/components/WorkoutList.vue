<template>
    <div class="workout-list">
        <div class="overflow-x-auto">
            <table class="table table-bordered table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th>Workout Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="w in workouts" :key="w.id">
                        <td>{{ console.log(w) }}</td>
                        <td>
                            <button class="btn btn-primary btn-sm ml-4">View</button>
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
            workouts: []
        }
    },
    mounted(){
        getAllWorkouts().then(workouts => this.workouts = workouts);
      
    },
    methods: {
       
    }
};
</script>
  