<template>
    <div>
        <div class="gap"></div>
        <h1 class="text-center">Add project</h1>
        <div class="gap"></div>

        <div>
            <p>Upload an image to Firebase:</p>
            <input type="file" @change="previewImage" accept="image/*" >
        </div>
        <div>
            <p>Progress: {{uploadValue.toFixed()+"%"}}
            <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
        </div>
        <div v-if="imageData!=null">
            <img class="preview" :src="picture">
            <br>
            <button @click="onUpload">Upload</button>
        </div>
    </div>
</template>

<style>
img.preview {
    width: 200px;
}
</style>

<script>
import firebase from 'firebase';
export default {
    data() {
        return {
            isLoggedIn: false,
            currentUser: false,
            user: '',
            imageData: null,
            picture: null,
            uploadValue: 0
        }
    },
    methods:{
        previewImage(event) {
            this.uploadValue=0;
            this.picture=null;
            this.imageData = event.target.files[0];
        },

        onUpload(){
            this.picture = null;
            const storageRef = firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
            storageRef.on(`state_changed`,snapshot=>{
                this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            }, error=>{console.log(error.message)},
            ()=>{this.uploadValue = 100;
                storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                this.picture = url;
                });
            }
            );
        }
    },
    created() {
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