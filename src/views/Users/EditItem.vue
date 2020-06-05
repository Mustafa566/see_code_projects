<template>
    <div>
        <div class="gap"></div>
        <router-link :to="{ name: 'Projects' }" class="btn darkBlueBackGround whiteText redHover ml-5">Go back</router-link>
        <div class="container">
            <h2>Edit project</h2>
            <div class="mainForm pl-5 pr-5 pt-3">
                <form v-on:submit.prevent="updateItem">
                    <!-- Your information -->
                    <div class="row">
                        <h4>Your information</h4>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md col-sm">
                            <p>First name *</p>
                        </div>
                        <div class="col-md col-sm">
                            <input class="form-control" type="text" v-model="projectInfo.firstName" required>
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
                            <p>Last name *</p>
                        </div>
                        <div class="col-md col-sm">
                            <input class="form-control" type="text" v-model="projectInfo.lastName" required>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md col-sm">
                            <p>Email *</p>
                        </div>
                        <div class="col-md col-sm">
                            <input class="form-control" type="email" v-model="projectInfo.email" required>
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
                            <input class="form-control" type="text" v-model="projectInfo.projectName" required>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md col-sm">
                            <p>Please give a short description about this project *</p>
                        </div>
                        <div class="col-md col-sm">
                            <input class="form-control" type="text" v-model="projectInfo.littleDescription" required>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md col-sm">
                            <p>Please select a project type that is most applicable *</p>
                        </div>
                        <div class="col-md col-sm">
                            <select class="custom-select" placeholder="sdf" v-model="projectInfo.projectType" required>
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
                            <p>Project description *</p>
                        </div>
                        <div class="col-md col-sm">
                            <textarea class="form-control" type="text-area" rows="10" v-model="projectInfo.projectDescription" required></textarea>
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
                            <p>Any other information you want to share about how this project was built? (technologies)</p>
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
                            <textarea class="form-control" type="text-area" rows="10" v-model="projectInfo.otherStatistics"></textarea>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md col-sm">
                            <p class="font-weight-bold">Please enter you login email before you submit *</p>
                        </div>
                        <div class="col-md col-sm">
                            <input class="form-control" type="email" v-model="projectInfo.emailId" required>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md col-sm">
                            <input type="submit" class="btn btn-primary w-75 submitProject" value="Submit & Publish"/>
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
                        <img src="@/assets/Icons/blackStar.png" class="favorIcon" @click="isHidden = !isHidden">
                        <img src="@/assets/Icons/star.png" class="favorIcon" v-if="isHidden" @click="isHidden = !isHidden">
                        <span class="infoCard float mr-4">{{projectInfo.emailId}}</span>
                    </div>
                </div><br>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';
import { db } from '../../Database';

export default {
    data() {
        return {
            isLoggedIn: false,
            currentUser: false,
            user: '',
            projectInfo: {},
            isHidden: false
        }
    },
    firebase: {
        addProject: db.ref('addProject'),
        itemsObj: {
            source: db.ref('addProject'),
            asObject: true
        }
    },
    methods: {
        updateItem() {
            this.$firebaseRefs.addProject.child(this.$route.params.id).set(this.projectInfo);
            this.$router.push('/')
        }
    },
    mounted() {
        // let project = this.itemsObj[this.$route.params.id]
        // this.projectInfo = {
        //     firstName: project.firstName,
        //     middleName: project.middleName,
        //     lastName: project.lastName,
        //     email: project.email,
        //     projectName: project.projectName,
        //     littleDescription: project.littleDescription,
        //     projectType: project.projectType,
        //     projectHomepage: project.projectHomepage,
        //     projectDescription: project.projectDescription,
        //     videoLink: project.videoLink,
        //     projectBuild: project.projectBuild,
        //     uniqueVisitors: project.uniqueVisitors,
        //     numberDownloads: project.numberDownloads,
        //     monthlyRevenue: project.monthlyRevenue,
        //     otherStatistics: project.otherStatistics,
        //     emailId: project.emailId
        // }
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