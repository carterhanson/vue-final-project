<template>
    <div class=" pt-5 bg-gray-200 flex items-center justify-center">
        <div class="max-w-md mx-auto p-4 bg-white rounded-md shadow-lg">
            <h2 class="text-2xl font-semibold mb-4">Create a Workout</h2>
            <form @submit.prevent="onSubmit" class="space-y-4">
                <div class="mb-4">
                    <label for="workout-name" class="block font-medium">Workout Name:</label>
                    <input type="text" v-model="workout.workout_name" required class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500">
                </div>
                <div class="mb-4">
                    <label for="workout-notes" class="block font-medium">Notes:</label>
                    <textarea v-model="workout.notes" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500" rows="4"></textarea>
                </div>
                <div>
                    <button type="button" @click="addExercise" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded-full">
                    + Add Exercise
                    </button>
                </div>
                <!-- Display Exercises for the workout -->

                <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-full focus:outline-none focus:ring">Create Workout</button>
            </form>
        </div>
    </div>
</template>
  
<script>
import { insertWorkout } from '@/api';
export default {
    inject: ["GStore"],
    data(){
        return{
            workout: {},
            errors: {}
        }
    },
    methods:{
        onSubmit(){
            if(this.isValid()){
                this.workout.user_id = this.GStore.currentUser.id;
                console.log(this.workout)
                insertWorkout(this.workout);
            }
        },
        addExercise(){
            this.$router.push('/add-exercise')
        },
        isValid(){
            let valid = true;
            this.erorrs = {};

            if(this.workout.workout_name == ""){
                this.errors.name = "Workout Name is Required";
                valid = false;
            }
            
            if(this.workout.notes == ""){
                this.errors.notes = "Notes Are Required";
                valid = false;
            }

            return valid;
        }
    }
};
</script>
  