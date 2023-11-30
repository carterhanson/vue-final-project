<template>
    <div class=" pt-5 bg-gray-200 flex items-center justify-center">
        <div class="max-w-md mx-auto p-4 bg-white rounded-md shadow-lg">
            <h2 class="text-2xl font-semibold mb-4">Create a Workout</h2>
            <form id="workout-form" class="space-y-4">
                <div class="mb-4">
                    <label for="workout-name" class="block font-medium">Workout Name:</label>
                    <input type="text" id="workout-name" name="workout-name" required class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500">
                </div>
                <!-- WorkoutList  -->
                <div>
                    <button @click="addExercise" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded-full">
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
export default {
    data(){
        return{

        }
    },
    methods:{
        addExercise(){
            this.$router.push('/add-exercise')
        }
    }
};
</script>
  