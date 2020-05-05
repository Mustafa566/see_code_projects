<template>
    <div>
        <div class="gap"></div>
            <div class="mt-5 loginMain" v-if="seen">
            <div class="row redBackGround loginHeader whiteText">
                <div class="col text-center border-right pointer" @click="seen = true">Login</div>
                <div class="col text-center pointer" @click="seen = false">Register</div>
            </div>
            <h3 class="text-center redText mt-5">Login</h3>
            <div class="row mt-5">
                <div class="col">
                    <input type="text" class="form-control w-75 horizonCenter" placeholder="Email *">
                </div>
            </div>
            <div class="row mt-5">
                <div class="col">
                    <input type="password" class="form-control w-75 horizonCenter" placeholder="Password *">
                </div>
            </div>
            <div class="row mt-1 ml-5">
                <div class="col">
                    <p class="redText">Forgot my password</p>
                </div>
            </div>
            <div class="row mt-2 mr-5 float-right">
                <div class="col">
                    <div class="btn redBackGround whiteText">Login</div>
                </div>
            </div>
        </div>

        <div class="mt-5 loginMain" v-if="!seen">
            <form @submit.prevent="submit" @keyup.enter="register()">
                <div class="row redBackGround loginHeader whiteText">
                    <div class="col text-center border-right pointer" @click="seen = true">Login</div>
                    <div class="col text-center pointer" @click="seen = false">Register</div>
                </div>
                <h3 class="text-center redText mt-5">Register</h3>
                <div class="row mt-5">
                    <div class="col">
                        <input type="text" class="form-control w-75 horizonCenter" placeholder="Email *" v-model="email" required>
                    </div>
                </div>
                
                <div class="row mt-5">
                    <div class="col">
                        <input type="password" class="form-control w-75 horizonCenter" placeholder="Password *" v-model="password" required>
                    </div>
                </div>
                <div class="row mt-5 mr-5 float-right">
                    <div class="col">
                        <button type="button" class="btn redBackGround whiteText" @click="register">Register</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="gap"></div>
        <div class="gap mt-3"></div>
    </div>
</template>

<script>
import firebase from 'firebase';
import '../../Database';

export default {
    data() {
        return {
            seen: true,
            email: '',
            password: ''
        }
    },
    methods: {
       register(e) {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(/*eslint-disable-line*/user => {
                    setTimeout(() => {
                        this.$router.push('/Index');
                        location.reload();
                    }, 3000);
                },
                err => {  
                    alert(err.message);
                })
                e.preventDefault();
        }
    }
}
</script>