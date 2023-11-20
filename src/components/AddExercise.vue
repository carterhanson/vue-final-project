<template>
    <div>
        <h3 class="text-lg font-semibold mb-2">Add Exercises:</h3>
        <label for="exercise-name" class="block font-medium">exercise Name:</label>
        <input type="text" id="exercise-name" name="exercise-name" required class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500">
    </div>
    <div>
        <label for="sets" class="block font-medium">Sets</label>
        <input type="text" id="sets" name="sets" required class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500">
    </div>
    <div>
        <label for="reps" class="block font-medium">Reps</label>
        <input type="text" id="reps" name="reps" required class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500">
    </div>
                
    <div class="mb-4">
        <label for="workout-notes" class="block font-medium">Notes:</label>
        <textarea id="workout-notes" name="workout-notes" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500" rows="4"></textarea>
    </div> 
    <div class="flex justify-between items-center">
        <button type="submit" name="submit button" class="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-full focus:outline-none focus:ring">Submit</button>
        <button type="button" class="text-gray-500 hover:text-gray-900">Cancel</button>
    </div>
</template>