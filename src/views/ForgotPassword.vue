<template>
    <div>
        <div class="gap"></div>
        <div class="container box">
            <div class="row" v-if="isHidden">
                <div class="alert alert-danger alert-dismissible fade show w-100" role="alert">
                    {{this.error}}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="row" v-if="seen">
                <div class="alert alert-success alert-dismissible fade show w-100" role="alert">
                    Email sended to {{this.email}} check your email.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="gap"></div>
            <div class="gap"></div>
            <h3 class="text-center mt-5">Forgot your password?</h3>
            <div class="gap"></div>
            <p class="text-center">
                Don't worry resetting your password is easy. Just type <br>
                in the email you registered to See Code Projects.
            </p>
            <div class="row mt-5">
                <div class="col-md-5">
                    <p class="float-right font-weight-bold">Email</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 ml-4">
                    <input type="email" class="float-right form-control w-50" placeholder="Enter your email address" v-model="email">
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-8 ml-4">
                    <button class="btn redBackGround darkBlueText font-weight-bold w-50 float-right" @click="resetPassword">SEND</button>
                </div>
            </div>
            <div class="gap"></div>
            <div class="gap"></div>
            <div class="gap"></div>
            <div class="gap"></div>
        </div>
    </div>    
</template>

<script>
import firebase from 'firebase';

export default {
    data() {
        return {
            email: '',
            isHidden: false,
            seen: false,
            error: ''
        }
    },
    methods: {
        resetPassword() {
            // eslint-disable-next-line
            const auth = firebase.auth();
            auth.sendPasswordResetEmail(this.email).then(() => {
                // Email sent.
                this.isHidden = false;
                this.seen = true;
            }).catch((error) => {
                // An error happened.
                this.isHidden = true;
                var x = error.message.toString();
                this.error = x;
            });
        }
    }
}
</script>