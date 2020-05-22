<template>
    <div>
        <div class="gap"></div>
        <div class="container">
            <form v-on:submit.prevent="postProject">
                <h2>Publish project</h2>
                <div class="mainForm pl-5 pr-5 pt-3">
                    <!-- Your information -->
                    <div class="row">
                        <h4>Your information</h4>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md col-sm">
                            <p>First name</p>
                        </div>
                        <div class="col-md col-sm">
                            <input class="form-control" type="text" v-model="projectInfo.firstname">
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md col-sm">
                            <p>Middle name (optional)</p>
                        </div>
                        <div class="col-md col-sm">
                            <input class="form-control" type="text" v-model="projectInfo.middleName">
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md col-sm">
                            <p>Last name</p>
                        </div>
                        <div class="col-md col-sm">
                            <input class="form-control" type="text" v-model="projectInfo.lastName">
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md col-sm">
                            <p>Email</p>
                        </div>
                        <div class="col-md col-sm">
                            <input class="form-control" type="email" v-model="projectInfo.email">
                        </div>
                    </div>

                    <!-- Project details -->
                    <div class="row mt-4">
                        <h4>Project details</h4>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md col-sm">
                            <p>Project name</p>
                        </div>
                        <div class="col-md col-sm">
                            <input class="form-control" type="text">
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md col-sm">
                            <p>Please pitch your project in one sentence</p>
                        </div>
                        <div class="col-md col-sm">
                            <input class="form-control" type="text" v-model="projectInfo.littleDescription">
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md col-sm">
                            <p>Please select a project type that is most applicable</p>
                        </div>
                        <div class="col-md col-sm">
                            <select class="custom-select" placeholder="sdf" v-model="projectInfo.projectType">
                                <option disabled value="">Choose...</option>
                                <option>Website / Web application</option>
                                <option>Mobile app</option>
                                <option>Desktop application</option>
                                <option>Browser extension / plugin</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md col-sm">
                            <p>Project homepage</p>
                        </div>
                        <div class="col-md col-sm">
                            <input class="form-control" type="text" v-model="projectInfo.projectHomepage">
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md col-sm">
                            <p>Project description</p>
                        </div>
                        <div class="col-md col-sm">
                            <textarea class="form-control" type="text-area" rows="10" v-model="projectInfo.projectDescription"></textarea>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md col-sm">
                            <p>Add videos of your project (link)</p>
                        </div>
                        <div class="col-md col-sm">
                            <input class="form-control" type="text" v-model="projectInfo.videoLink">
                        </div>
                    </div>

                    <!-- How Project is Built -->
                    <div class="row mt-4">
                        <h4>How Project is Built</h4>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md col-sm">
                            <p>Any other information you want to share about how this project was built?</p>
                        </div>
                        <div class="col-md col-sm">
                            <textarea class="form-control" type="text-area" rows="10" v-model="projectInfo.projectBuild"></textarea>
                        </div>
                    </div>

                    <!-- Project Statistics -->
                    <div class="row mt-4">
                        <h4>Project Statistics</h4>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md col-sm">
                            <p>Average number of unique visitors/month</p>
                        </div>
                        <div class="col-md col-sm">
                            <input class="form-control" type="text" v-model="projectInfo.uniqueVisitors">
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md col-sm">
                            <p>Average number of downloads/month</p>
                        </div>
                        <div class="col-md col-sm">
                            <input class="form-control" type="text" v-model="projectInfo.numberDownloads">
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md col-sm">
                            <p>Average monthly revenue</p>
                        </div>
                        <div class="col-md col-sm">
                            <input class="form-control" type="text" v-model="projectInfo.monthlyRevenue">
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md col-sm">
                            <p>Other statistics you would like to share?</p>
                        </div>
                        <div class="col-md col-sm">
                            <textarea class="form-control" type="text-area" rows="10" v-model="projectInfo.otherStatistics" required></textarea>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md col-sm">
                            <p class="font-weight-bold">Please enter you login email before you submit</p>
                        </div>
                        <div class="col-md col-sm">
                            <input class="form-control" type="email" v-model="projectInfo.emailId" required>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md col-sm mb-3">
                            <input type="submit" class="btn btn-primary w-75 submitProject" value="Submit & Publish"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <!-- <div class="container">
            <div>
                <p>Upload an image to Firebase:</p>
                <input type="file" @change="previewImage" accept="image/*">
            </div>
            <div>
                <p>Progress: {{uploadValue.toFixed() + "%"}}
                    <progress id="progress" :value="uploadValue" max="100" ></progress>
                </p>
            </div>
            <div v-if="imageData != null">
                <img class="preview" :src="picture">
                <br>
                <button @click="onUpload">Upload</button>
            </div>
        </div> -->
    </div>
</template>

<style>
img.preview {
    width: 500px;
}
</style>

<script>
import firebase from 'firebase';
import { db } from '../../Database';
export default {
    data() {
        return {
            isLoggedIn: false,
            currentUser: false,
            user: '',
            projectInfo: {
                firstName: '',
                middleName: '',
                lastName: '',
                email: '',
                projectName: '',
                littleDescription: '',
                projectType: '',
                projectHomepage: '',
                projectDescription: '',
                videoLink: '',
                projectBuild: '',
                uniqueVisitors: '',
                numberDownloads: '',
                monthlyRevenue: '',
                otherStatistics: '',
                emailId: ''
            }
            // imageData: null,
            // picture: null,
            // uploadValue: 0
        }
    },
    firebase: {
        addProject: db.ref('addProject')
    },
    methods: {
        postProject() {
            if(this.projectInfo.emailId == this.user) {
                console.log(JSON.stringify(this.projectInfo))
                this.$firebaseRefs.addProject.push({
                    firstName: this.projectInfo.firstName,
                    middleName: this.projectInfo.middleName,
                    lastName: this.projectInfo.lastName,
                    email: this.projectInfo.email,
                    projectName: this.projectInfo.projectName,
                    littleDescription: this.projectInfo.littleDescription,
                    projectType: this.projectInfo.projectType,
                    projectHomepage: this.projectInfo.projectHomepage,
                    projectDescription: this.projectInfo.projectDescription,
                    videoLink: this.projectInfo.videoLink,
                    projectBuild: this.projectInfo.projectBuild,
                    uniqueVisitors: this.projectInfo.uniqueVisitors,
                    numberDownloads: this.projectInfo.numberDownloads,
                    monthlyRevenue: this.projectInfo.monthlyRevenue,
                    otherStatistics: this.projectInfo.otherStatistics,
                    emailId: this.projectInfo.emailId
                })
                this.projectInfo.firstName = '';
                this.projectInfo.middleName = '';
                this.projectInfo.lastName = '';
                this.projectInfo.email = '';
                this.projectInfo.projectName = '';
                this.projectInfo.littleDescription = '';
                this.projectInfo.projectType = '';
                this.projectInfo.projectHomepage = '';
                this.projectInfo.projectDescription = '';
                this.projectInfo.videoLink = '';
                this.projectInfo.projectBuild = '';
                this.projectInfo.uniqueVisitors = '';
                this.projectInfo.numberDownloads = '';
                this.projectInfo.monthlyRevenue = '';
                this.projectInfo.otherStatistics = '';
                this.projectInfo.emailId = '';
                this.$router.push('/Projects')
            } else {
                alert('Use the same email with this account when you logged in.');
            }
        },
        // previewImage(event) {
        //     this.uploadValue=0;
        //     this.picture=null;
        //     this.imageData = event.target.files[0];
        // },
        // onUpload() {
        //     this.picture = null;
        //     const storageRef = firebase.storage().ref(`${'Mustafa ' + this.imageData.name}`).put(this.imageData);
        //     storageRef.on(`state_changed`, snapshot => {
        //         this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //     }, error => {console.log(error.message)},()=> {
        //         this.uploadValue = 100;
        //         storageRef.snapshot.ref.getDownloadURL().then((url)=>{
        //             this.picture = url;
        //         });
        //     }
        //     );
        // }
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