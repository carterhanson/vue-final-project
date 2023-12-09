<template>
    <div class="mt-5 max-w-md mx-auto p-4 bg-white rounded-md shadow-lg">
        <form @submit.prevent="onSubmit" class="space-y-4">
            <div>
                <h3 class="text-lg font-semibold mb-2">Add Exercise</h3>
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
                <button type="submit" name="submit button" class="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-full focus:outline-none focus:ring">Submit</button>
                <button type="button" @click="$router.push({path: '/'})" class="text-gray-500 hover:text-gray-900">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
import { insertExercise } from '@/api';
export default {
    props: ["workoutId"],
    data(){
        return{
            exercise: {},
            errors:{}
        }
    },


    methods:{
            onSubmit(){
                if(this.isValid()){
                    insertExercise(this.exercise);
                }
            },

            isValid(){
                let valid = true;
                this.errors = {};
                
                if(this.exercise.exercise_name == ""){
                    this.errors.name = "Exercise Name is Required";
                    valid = false;
                }

                if(this.exercise.sets == ""){
                    this.errors.sets = "Number of Sets are Required";
                    valid = false;
                }

                if(this.exercise.weight == ""){
                    this.errors.weight = "Weight is Required";
                    valid = false;
                }

                if(this.exercise.repetitions = ""){
                    this.errors.repetitions = "Reps are Required";
                    valid = false;
                }

                if(this.exercise.notes == ""){
                    this.errors.notes = "Notes are Required"
                    valid = false;
                }
                return valid;
            }
    }
    
}


</script>