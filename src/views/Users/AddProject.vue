<template>
    <div>
        <div class="gap"></div>
        <router-link :to="{ name: 'Profile' }" class="btn darkBlueBackGround whiteText redHover ml-5">Go back</router-link>
        <div class="container" v-for="profile of userProfile" :key="profile['.key']">
            <div v-if="profile.emailId == user && profile.verified == true">
                <h2>Publish project</h2>
                <div class="mainForm pl-5 pr-5 pt-3">
                    <form v-on:submit.prevent="postProject">
                        <!-- Your information -->
                        <div class="row">
                            <h4>Your information</h4>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md col-sm">
                                <p>First name *</p>
                            </div>
                            <div class="col-md col-sm">
                                <input 
                                class="form-control" 
                                type="text" 
                                v-model="projectInfo.firstName" 
                                required>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md col-sm">
                                <p>Middle name (optional)</p>
                            </div>
                            <div class="col-md col-sm">
                                <input 
                                class="form-control" 
                                type="text" 
                                v-model="projectInfo.middleName">
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md col-sm">
                                <p>Last name *</p>
                            </div>
                            <div class="col-md col-sm">
                                <input 
                                class="form-control" 
                                type="text" 
                                v-model="projectInfo.lastName" 
                                required>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md col-sm">
                                <p>Email *</p>
                            </div>
                            <div class="col-md col-sm">
                                <input 
                                class="form-control" 
                                type="email" 
                                v-model="projectInfo.email" 
                                required>
                            </div>
                        </div>

                        <!-- Project details -->
                        <div class="row mt-4">
                            <h4>Project details</h4>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md col-sm">
                                <p>Project name *</p>
                            </div>
                            <div class="col-md col-sm">
                                <input 
                                class="form-control" 
                                type="text" 
                                v-model="projectInfo.projectName" 
                                required>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md col-sm">
                                <p>Please give a short description about this project *</p>
                            </div>
                            <div class="col-md col-sm">
                                <input 
                                class="form-control" 
                                type="text" 
                                v-model="projectInfo.littleDescription" 
                                required>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md col-sm">
                                <p>Please select a project type that is most applicable *</p>
                            </div>
                            <div class="col-md col-sm">
                                <select 
                                class="custom-select" 
                                v-model="projectInfo.projectType" 
                                required>
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
                                <input 
                                class="form-control" 
                                type="text" 
                                placeholder="www.websitename.com"
                                v-model="projectInfo.projectHomepage">
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md col-sm">
                                <p>Project description *</p>
                            </div>
                            <div class="col-md col-sm">
                                <textarea 
                                class="form-control" 
                                type="text-area" 
                                rows="10" 
                                v-model="projectInfo.projectDescription" 
                                required>
                                </textarea>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md col-sm">
                                <p>Add videos of your project (link)</p>
                            </div>
                            <div class="col-md col-sm">
                                <input 
                                class="form-control" 
                                type="text" 
                                v-model="projectInfo.videoLink">
                            </div>
                        </div>

                        <!-- How Project is Built -->
                        <div class="row mt-4">
                            <h4>How Project is Built</h4>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md col-sm">
                                <p>Any other information you want to share about how this project was built? (technologies)</p>
                            </div>
                            <div class="col-md col-sm">
                                <textarea 
                                class="form-control" 
                                type="text-area" 
                                rows="10" 
                                v-model="projectInfo.projectBuild">
                                </textarea>
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
                                <input 
                                class="form-control" 
                                type="text" 
                                v-model="projectInfo.uniqueVisitors">
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md col-sm">
                                <p>Average number of downloads/month</p>
                            </div>
                            <div class="col-md col-sm">
                                <input 
                                class="form-control" 
                                type="text" 
                                v-model="projectInfo.numberDownloads">
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md col-sm">
                                <p>Average monthly revenue</p>
                            </div>
                            <div class="col-md col-sm">
                                <input 
                                class="form-control" 
                                type="text" 
                                v-model="projectInfo.monthlyRevenue">
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md col-sm">
                                <p>Other statistics you would like to share?</p>
                            </div>
                            <div class="col-md col-sm">
                                <textarea 
                                class="form-control" 
                                type="text-area" 
                                rows="10" 
                                v-model="projectInfo.otherStatistics">
                                </textarea>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md col-sm">
                                <p class="font-weight-bold">Please enter you login email before you submit *</p>
                            </div>
                            <div class="col-md col-sm">
                                <input 
                                class="form-control" 
                                type="email" 
                                v-model="projectInfo.emailId" 
                                required>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-md col-sm">
                                <input 
                                type="submit" 
                                class="btn btn-primary w-75 submitProject" 
                                value="Submit & Publish"/>
                            </div>
                        </div>
                    </form>
                <hr>
                    <div class="col-md-6 cardMainPreview mb-2">
                        <div class="row mr-1 mt-1">
                            <div class="col">
                                <p class="float-left">Date</p>
                            </div>
                            <p class="text-success">More info</p>
                        </div>
                        <div class="col ml-0">
                            <h5 class="redText">{{projectInfo.projectName}}</h5>
                            <p>{{projectInfo.littleDescription}}</p>
                        </div>
                        <div class="bottomCard">
                            <div class="line"></div>
                            <span class="infoCard">Website</span>
                            <span class="infoCard float mr-4">{{projectInfo.emailId}}</span>
                        </div>
                    </div><br>
                </div>
            </div>
        </div>
        <!-- Popup -->
        <!-- <div class="container">
            <div>
                <div>
                    <div class="col">
                        <div class="alert alert-danger" role="alert">
                            <h3 class="alert-heading">Your profile is incomplete !</h3>
                            <div class="mt-5"></div>
                            <h6 class="lineHeight">
                                You need to make a profile to have access to post your project.<br>
                                The first thing to do is click below the link and you go to the "Create Profile"
                                section.<br>
                                Make your profile and click on the submit button. When it is done you can publish 
                                your project.
                            </h6>
                        <hr>
                            <h6 class="mb-0">
                                Click here to go to the
                                "
                                <router-link :to="{ name: 'CreateProfile' }">Create Profile</router-link>
                                "
                                page.
                            </h6>
                        </div>
                    </div>
                    <div class="gap2"></div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import firebase from 'firebase';
import { db } from '../../Database';

var d = new Date();
var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();

var date = day + '-' + month + '-' + year

export default {
    data() {
        return {
            isLoggedIn: false,
            currentUser: false,
            user: '',
            userProfile: [],
            isHidden: false,
            projectInfo: {
                http: 'http://',
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
                emailId: '',
                createdAt: date
            }
        }
    },
    firebase: {
        addProject: db.ref('addProject'),
        userProfile: db.ref('userProfile')
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
                    projectHomepage: this.projectInfo.http + this.projectInfo.projectHomepage,
                    projectDescription: this.projectInfo.projectDescription,
                    videoLink: this.projectInfo.videoLink,
                    projectBuild: this.projectInfo.projectBuild,
                    uniqueVisitors: this.projectInfo.uniqueVisitors,
                    numberDownloads: this.projectInfo.numberDownloads,
                    monthlyRevenue: this.projectInfo.monthlyRevenue,
                    otherStatistics: this.projectInfo.otherStatistics,
                    emailId: this.projectInfo.emailId,
                    createdAt: date
                })
                this.$router.push('/Projects')
            } else {
                alert('Use the same email with this account when you logged in.');
            }
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
                console.log(this.user)
            } else {
                this.$router.push('/Login')
            }
        });
    }
}
</script>