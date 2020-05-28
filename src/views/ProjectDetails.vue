<template>
    <div>
        <div class="gap"></div>
        <div v-for="project of addProject" :key="project['.key']" class="container">
            <div v-if="project['.key'] == route">
                <h1 class="redText">{{project.projectName}}</h1>
                <span>{{ new Date() | moment("dddd, MMMM Do YYYY") }}</span>
                <p class="mt-4">{{project.projectHomepage}}</p>
                <div class="mt-4 vistors">
                    <p>Unique vistors: <strong>{{project.uniqueVisitors}}</strong></p>
                    <p>Number downloads: <strong>{{project.numberDownloads}}</strong></p>
                    <p>Monthly Revenue: <strong>{{project.monthlyRevenue}}</strong></p>
                    <strong>{{project.otherStatistics}}</strong>
                </div>
                <div class="littleDescription pl-1 mt-5">
                    <p>{{project.littleDescription}}</p>
                </div>
                <p class="mt-3">{{project.projectDescription}}</p>
            </div>
        </div>
    </div>
</template>

<style>
.littleDescription {
    background-color: #e4e4e4;
    max-width: 500px;
}

.vistors {
    border: 1px solid lightgray;
    max-width: 400px;
    padding-left: 10px;
    padding-top: 10px;
}
</style>

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
        //     projectName: project.projectName, // gedaan
        //     littleDescription: project.littleDescription, // gedaan
        //     projectType: project.projectType,
        //     projectHomepage: project.projectHomepage, // gedaan
        //     projectDescription: project.projectDescription, // gedaan
        //     videoLink: project.videoLink,
        //     projectBuild: project.projectBuild,
        //     uniqueVisitors: project.uniqueVisitors, // gedaan
        //     numberDownloads: project.numberDownloads, // gedaan
        //     monthlyRevenue: project.monthlyRevenue, // gedaan
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