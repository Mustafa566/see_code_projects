<template>
    <div>
        <h1 class="mt-5 text-center">Admin Panel</h1>
        <!-- All users -->
        <div class="ml-5 mr-5">
            <h3 class="mt-5">All users</h3>
            <table class="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">User id</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody v-for="user of users" :key="user['.key']">
                    <tr>
                        <td>{{user.userId}}</td>
                        <td>{{user.username}}</td>
                        <td>{{user.email}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- All users profiles -->
        <div class="ml-5 mr-5">
            <h3 class="mt-5">All users profiles</h3>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Email id</th>
                        <th scope="col">Full name</th>
                        <th scope="col">Verified</th>
                        <th scope="col">Bio</th>
                        <th scope="col">Birthday day</th>
                        <th scope="col">Birthday month</th>
                        <th scope="col">Birthday year</th>
                        <th scope="col">Country</th>
                        <th scope="col">State</th>
                    </tr>
                </thead>
                <tbody v-for="profile of userProfile" :key="profile['.key']">
                    <tr>
                        <td>{{profile.emailId}}</td>
                        <td>{{profile.fullName}}</td>
                        <td>{{profile.verified}}</td>
                        <td>{{profile.bio}}</td>
                        <td>{{profile.birthdayDay}}</td>
                        <td>{{profile.birthdayMonth}}</td>
                        <td>{{profile.birthdayYear}}</td>
                        <td>{{profile.country}}</td>
                        <td>{{profile.stateProvinceRegion}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- All projects -->
        <div class="ml-5 mr-5">
            <h3 class="mt-5">All projects</h3>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Project name</th>
                        <th scope="col">Project type</th>
                        <th scope="col">Project website</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Email id</th>
                        <th scope="col">Created at</th>
                        <th scope="col">Delete / Edit</th>
                    </tr>
                </thead>
                <tbody v-for="project of addProject" :key="project['.key']">
                    <tr>
                        <td>{{project.projectName}}</td>
                        <td>{{project.projectType}}</td>
                        <td>{{project.projectHomepage}}</td>
                        <td>{{project.firstName}}</td>
                        <td>{{project.lastName}}</td>
                        <td>{{project.email}}</td>
                        <td>{{project.emailId}}</td>
                        <td>{{project.createdAt}}</td>
                        <td>
                            <router-link :to="{ name: 'Edit', params: {id: project['.key']} }" class="pointer deleteBtn mx-auto d-block mb-4">
                                <img src="@/assets/Icons/edit.png" class="pointer deleteBtn">
                            </router-link>
                            <img src="@/assets/Icons/delete.png" @click="deleteItem(project['.key'])" class="pointer deleteBtn mx-auto d-block">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';
import { db } from '../Database';
export default {
    data() {
        return {
            isLoggedIn: false,
            currentUser: false,
            isAdmin: false,
            user: '',
            addProject: [],
            userProfile: [],
            users: []
        }
    },
    firebase: {
        addProject: db.ref('addProject'),
        userProfile: db.ref('userProfile'),
        users: db.ref('users')
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
                if(this.user == 'admin@gmail.com') {
                    this.isAdmin = true;
                    console.log(this.isAdmin);
                } else {
                    this.$router.push('/Profile')
                }
            } else {
                console.log('no user'); 
                if(this.user == 'admin@gmail.com') {
                    this.isAdmin = true;
                } else {
                    this.$router.push('/Profile')
                }
            }
            });
    }
}
</script>

<style>

</style>