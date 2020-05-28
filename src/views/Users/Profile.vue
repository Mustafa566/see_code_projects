<template>
    <div>
        <div class="gap"></div>
        <h1>Profile</h1>
    </div>    
</template>

<script>
import firebase from 'firebase';
export default {
    data() {
        return {
            isLoggedIn: false,
            currentUser: false,
            user: ''
        }
    },
    mounted() {
        if(firebase.auth().currentUser) {
            this.isLoggedIn = true;
            this.user = firebase.auth().currentUser.email;
        }
        firebase.auth().onAuthStateChanged(currentUser => {
            if (currentUser) {
                this.user = firebase.auth().currentUser.email;
                this.isLoggedIn = true;
            } else {
                this.$router.push('/Login')
            }
        });
    }
}
</script>