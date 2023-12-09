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
                    <tr v-for="w in workouts" :key="w.workout_name">
                        <td>{{ w.workout_name }}</td>
                        <td>
                            <button class="btn btn-primary btn-sm ml-4" @click="viewWorkout(w.id)">View</button>
                            <button class="btn btn-primary btn-sm ml-4">Delete</button>
                        </td>
                    </tr>
                </tbody>
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
        if(this.GStore.currentUser){
            getWorkoutByUserId(this.GStore.currentUser.id).then(workouts => this.workouts = workouts);
        }
      
    },
    methods: {
        viewWorkout(id){
            this.$router.push({name: 'ViewWorkout', params: {workoutId: id}})
        }
    }
};
</script>
  