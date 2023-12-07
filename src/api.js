import axios from 'axios'

// let apiURL = 'http://localhost:8888'    // FOR REQUESTS TO THE JSON SERVER
// let apiURL = 'http://localhost/api'   // FOR REQUESTS TO THE DEV API PROJECT

let apiURL = 'http://localhost:8888'        // FOR REQUESTS TO THE JSON SERVER
if(!location.port){
    if(location.hostname == "localhost"){
        apiURL = 'http://localhost/api'     // FOR REQUESTS TO THE DEV API PROJECT
    }else{
        apiURL = "https://your-domain/api"; // FOR REQUESTS TO THE LIVE API PROJECT
        // Leave off the wwww!

        // TODO: Ensure that https is being used
        // Redirect to https if it's not being used
        if (location.protocol !== 'https:') {
            location.replace(`https:${location.href.substring(location.protocol.length)}`);
        }
    }
}

const ax = axios.create({
    baseURL: apiURL
});
console.log("REQUESTS ARE BEING SENT TO: " + apiURL);

export function getAllUsers(){
    return ax.get("users/").then(resp => (resp.data)).catch(error => errorHandler("Error Getting All Users:" + error));
}

export function getAllRoles() {
    return ax.get("roles/").then(resp => (resp.data)).catch((error) => errorHandler("Error Getting All Roles:" + error));
}

export function getUserById(id){
    return ax.get("users/" + id).then(resp => (resp.data)).catch((error) => errorHandler("Error Getting User By Id:" + error));
}

export function updateUser(user){
    return ax.put("users/" + user.id, user).catch((error) => errorHandler("Error Updating User:" + error));
}

export function insertUser(user){
    return ax.post("users/", user).catch((error) => errorHandler("Error Inserting User:" + error));
}

export function getAllExercises(){
    return ax.get("exercises/").then(resp => (resp.data)).catch(error => errorHandler("Error Getting All exercises" + error));
}

export function getAllWorkouts(){
    return ax.get("workouts/").then(resp => (resp.data)).catch(error => errorHandler("Error Getting All workouts" + error));
}

export function getAllWorkoutExercises(){
    return ax.get("workout_exercises/").then(resp => (resp.data)).catch(error => errorHandler("Error Getting All workout exercises" + error));
}

export function getWorkoutExercisesById(id){
    return ax.get("workout_exercises/" + id).then(resp => (resp.data)).catch((error) => errorHandler("Error Getting Workout Exercise By Id:" + error));
}

export function getWorkoutByUserId(id){
    return ax.get("workouts/?user_id=" + id).then(resp => (resp.data)).catch((error) => errorHandler("Error Getting Workouts By Id:" + error));
}

export function getExerciseById(id){
    return ax.get("exercises/" + id).then(resp => (resp.data)).catch((error) => errorHandler("Error Getting Exercise By Id:" + error));
}

export function insertExercise(exercise){
    return ax.post("exercises/", exercise).catch((error) => errorHandler("Error Inserting Exercise:" + error));
}

export function insertWorkout(workout){
    return ax.post("workouts/", workout).catch((error) => errorHandler("Error Inserting Workout:" + error));
}

export function insertWorkoutExercise(workoutExercise){
    return ax.post("workout_exercises/", workoutExercise).catch((error) => errorHandler("Error Inserting Workout_exercise" + error));
}



export function login(email, password) {
    if(apiURL == "http://localhost:8888"){
        return ax.get(`users/?email=${email}&password=${password}`).then(resp => {
            if(resp.data.length == 1){
                return resp.data[0]
            }else{
                return null
            }
        });
    }else{
        return ax.post("login/", { email, password }).then(resp => resp?.data);
    }
}

export function logout(){
    if(apiURL == "http://localhost:8888"){
        return;
    }else{
        return ax.get("logout/");
    }
}

function errorHandler(msg){
    console.log("API ERROR", msg);
    throw new Error(msg); // because we throw an error here, we can catch it in our components.
}
