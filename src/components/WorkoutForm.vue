<template>
    <div class="bg-gray-200 min-h-screen flex items-center justify-center">
        <div class="max-w-md mx-auto p-4 bg-white rounded-md shadow-lg">
            <h2 class="text-2xl font-semibold mb-4">Create a Workout</h2>
            <form id="workout-form" class="space-y-4">
                <div class="mb-4">
                <label for="workout-name" class="block font-medium">Workout Name:</label>
                <input type="text" id="workout-name" name="workout-name" required class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500">
                </div>

                <div class="mb-4">
                <label for="workout-date" class="block font-medium">Date:</label>
                <input type="date" id="workout-date" name="workout-date" required class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500">
                </div>

                <div class="mb-4">
                <label for="workout-notes" class="block font-medium">Notes:</label>
                <textarea id="workout-notes" name="workout-notes" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500" rows="4"></textarea>
                </div>

                <h3 class="text-lg font-semibold mb-2">Add Exercises:</h3>
                <!-- Exercise selection and input fields go here -->

                <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-full focus:outline-none focus:ring">Create Workout</button>
            </form>
        </div>
    </div>
</template>
  
<script>
export default {
    // WorkoutForm component logic goes here
};
</script>
  