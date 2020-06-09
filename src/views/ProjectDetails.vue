<template>
    <div>
        <div class="gap"></div>
        <router-link :to="{ name: 'Projects' }" class="btn darkBlueBackGround whiteText redHover ml-5">Go back</router-link>
        <div v-for="project of addProject" :key="project['.key']" class="container">
            <div v-if="project['.key'] == route">
                <h1 class="redText">{{project.projectName}}</h1>
                <h6>{{project.createdAt}}</h6>

                <h5 class="mt-5">Type</h5>
                <p>{{project.projectType}}</p>

                <p v-if="project.projectHomepage != null">{{project.projectHomepage}}</p>
                <div class="mt-4 vistors" 
                    v-if="
                    project.uniqueVisitors != null && 
                    project.numberDownloads != null && 
                    project.monthlyRevenue != null && 
                    project.otherStatistics != null">
                    <p v-if="project.uniqueVisitors != null">Unique vistors: <strong>{{project.uniqueVisitors}}</strong></p>
                    <p v-if="project.numberDownloads != null">Number downloads: <strong>{{project.numberDownloads}}</strong></p>
                    <p v-if="project.monthlyRevenue != null">Monthly Revenue: <strong>{{project.monthlyRevenue}}</strong></p>
                    <strong v-if="project.otherStatistics != null">{{project.otherStatistics}}</strong>
                </div>
                <div class="littleDescription pl-1 mt-5">
                    <h5>Short description about project</h5>
                    <p>{{project.littleDescription}}</p>
                </div>
                <h5 class="mt-5">Project description</h5>
                <p>{{project.projectDescription}}</p>

                <h5 class="mt-5" v-if="project.projectBuild != null">How project was build</h5>
                <p>{{project.projectBuild}}</p>
                
                <h5 class="mt-5" v-if="project.videoLink != null">Video of project</h5>
                <p>{{project.videoLink}}</p>

                <h5 class="mt-5">Owner</h5>
                <div class="row ml-0">
                    <p>{{project.firstName}}</p>
                    <p class="ml-2" v-if="project.middleName != null">{{project.middleName}}</p>
                    <p class="ml-2">{{project.lastName}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';
import { db } from '../Database';

export default {
    data() {
        return {
            addProject: [],
            route: this.$route.params.id
        }
    },
    firebase: {
        addProject: db.ref('addProject'),
        itemsObj: {
            source: db.ref('addProject'),
            asObject: true
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
    }
}
</script>