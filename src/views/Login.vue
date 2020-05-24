<template>
    <div>
        <div class="gap"></div>
        <div class="mt-5 loginMain" v-if="seen">
            <form @submit.prevent="submit" @keyup.enter="login()">
                <div class="row redBackGround loginHeader whiteText">
                    <div class="col text-center border-right pointer" @click="seen = true">Login</div>
                    <div class="col text-center pointer" @click="seen = false">Register</div>
                </div>
                <h3 class="text-center redText mt-5">Login</h3>
                <div class="row mt-5">
                    <div class="col">
                        <input type="text" class="form-control w-75 horizonCenter" placeholder="Email *" v-model="email">
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col">
                        <input type="password" class="form-control w-75 horizonCenter" placeholder="Password *" v-model="password">
                    </div>
                </div>
                <div class="row mt-1 ml-5">
                    <div class="col">
                        <p class="redText">Forgot my password</p>
                    </div>
                </div>
                <div class="row mt-2 mr-5 float-right">
                    <div class="col">
                        <div class="btn redBackGround whiteText" @click="login">Login</div>
                    </div>
                </div>
                <div class="row mt-5 ml-5">
                    <div class="col">
                        <div v-if="!isHidden" class="loader loader--style3" title="2">
                            <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="60px" height="60px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                            <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,
                            14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                                <animateTransform attributeType="xml"
                                attributeName="transform"
                                type="rotate"
                                from="0 25 25"
                                to="360 25 25"
                                dur="0.6s"
                                repeatCount="indefinite"/>
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </form>
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
                <div class="row mt-5 ml-5">
                    <div class="col">
                        <div v-if="!isHidden" class="loader loader--style3" title="2">
                            <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="60px" height="60px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                            <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,
                            14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                                <animateTransform attributeType="xml"
                                attributeName="transform"
                                type="rotate"
                                from="0 25 25"
                                to="360 25 25"
                                dur="0.6s"
                                repeatCount="indefinite"/>
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="gap"></div>
        <div class="gap mt-3"></div>
    </div>
</template>

<style>
svg path, svg rect{
  fill: #dd1843;
}
</style>

<script>
import firebase from 'firebase';
import '../Database';

export default {
    data() {
        return {
            seen: true,
            isHidden: true,
            email: '',
            password: ''
        }
    },
    methods: {
       register() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(/*eslint-disable-line*/user => {
                    setTimeout(() => {
                        this.$router.push('/');
                        location.reload();
                    }, 2000);
                    this.isHidden = false;
                },
                err => {  
                    alert(err.message);
                })
        },
        login() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(/*eslint-disable-line*/user => {
                    setTimeout(() => {
                        this.$router.push('/');
                    }, 2000);
                    this.isHidden = false;
                },
                err => {
                    alert(err.message);
                })
        }
    }
}
</script>