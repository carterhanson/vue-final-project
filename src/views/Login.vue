<template>
    <div class="max-w-sm mx-auto p-4 bg-white rounded-md shadow-lg">
        <div class="login">
            <form @submit.prevent="onSubmit">
                <div>
                    <label class="block font-medium">Email:</label>
                    <input v-model="email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"/>
                </div>
                <div>
                    <label class="block font-medium">Password:</label>
                    <input type="password" v-model="password" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"/>
                </div>
                <div>
                    <input type="submit" id="btnSubmit" name="submit button" class="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-full focus:outline-none focus:ring mt-3">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import {login} from '../api.js';

export default {
    inject: ['GStore'],
    data(){
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        onSubmit(){
            if(this.validate()){
                login(this.email, this.password).then(user => {
                    if(user){
                        this.GStore.currentUser = user;
                        sessionStorage.setItem("currentUser", JSON.stringify(user));
                        this.$router.push({name: "home"});
                    }else{
                        alert("LOGIN FAILED!");
                    }
                })
            }
        },
        validate(){
            if(!this.email || !this.password){
                alert("Invalid Input");
                return false;
            }
            return true;
        }
    }
}
</script>

