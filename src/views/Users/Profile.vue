<template>
    <div class="div">
        <div class="gap"></div>
        <div class="row">
            <!-- Profile section -->
            <div class="col-md-3 ml-5">
                <div class="card w-100">
                    <div class="card-body">
                        <img src="@/assets/logo.png" class="img-fluid img-thumbnail mx-auto d-block mb-5" alt="Responsive image">
                        <div class="pl-5" v-for="userr in users" :key="userr['.key']">
                            <div v-if="userr.email == user">
                                <p class="card-title font-weight-bold redText">{{userr.fullName}}</p>
                                <p class="card-title font-weight-bold redText">{{userr.username}}</p>
                                <p class="card-title font-weight-bold redText">{{userr.email}}</p>
                            </div>
                        </div>
                        <div v-for="userProfiles in userProfile" :key="userProfiles['.key']">
                            <div v-if="userProfiles.emailId == user">
                                <div class="pl-5 mt-4">
                                    <p>Slogan:</p>
                                    <p class="card-title font-weight-bold">{{userProfiles.slogan}}</p>
                                </div>
                            <div class="w-100 lines mt-4 mb-4"></div>
                                <div class="center">
                                    <!-- facebook -->
                                    <a :href="userProfiles.facebook" target="_blank" class="ml-1 card-text">
                                        <img src="@/assets/Icons/Profile/facebook.png" class="img-fluid icons mr-3" alt="Responsive image">
                                    </a>
                                    <!-- linkedin -->
                                    <a :href="userProfiles.linkedin" target="_blank" class="ml-1 card-text">
                                        <img src="@/assets/Icons/Profile/linkedin.png" class="img-fluid icons mr-3" alt="Responsive image">
                                    </a>
                                    <!-- twitter -->
                                    <a :href="'https://twitter.com/search?q=' + userProfiles.twitter + '&src=typed_query'" target="_blank" class="ml-1 card-text">
                                        <img src="@/assets/Icons/Profile/twitter.png" class="img-fluid icons mr-3" alt="Responsive image">
                                    </a>
                                    <!-- instagram -->
                                    <a :href="'https://www.instagram.com/' + userProfiles.instagram" target="_blank" class="ml-1 card-text">
                                        <img src="@/assets/Icons/Profile/instagram.png" class="img-fluid icons mr-3" alt="Responsive image">
                                    </a>
                                    <!-- github -->
                                    <a :href="'https://github.com/' + userProfiles.github" target="_blank" class="ml-1 card-text">
                                        <img src="@/assets/Icons/Profile/github.png" class="img-fluid icons mr-3" alt="Responsive image">
                                    </a>
                                    <!-- personalWebsite -->
                                    <a :href="userProfiles.personalWebsite" target="_blank" class="ml-1 card-text">
                                        <img src="@/assets/Icons/Profile/personalWebsite.png" class="img-fluid icons mr-3" alt="Responsive image">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Personal information -->
            <div class="col-md-3">
                <div class="card w-100">
                    <div v-for="userProfiles in userProfile" :key="userProfiles['.key']">
                        <div v-if="userProfiles.emailId == user">
                            <div class="card-body">
                                <h5 class="card-title redText">Bio</h5>
                                <p class="card-text" >{{userProfiles.bio}}</p>

                                <h5 class="card-title redText mt-5">Birthday:</h5>
                                <div class="row ml-0">
                                    <p class="card-text">{{userProfiles.birthdayDay}}-</p>
                                    <p class="card-text">{{userProfiles.birthdayMonth}}-</p>
                                    <p class="card-text">{{userProfiles.birthdayYear}}</p>
                                </div>

                                <h5 class="card-title redText mt-4">Country:</h5>
                                <div class="row ml-0">
                                    <p class="card-text">{{userProfiles.country}}</p>
                                </div>

                                <h5 class="card-title redText mt-5">State/Province/Region:</h5>
                                <div class="row ml-0">
                                    <p class="card-text">{{userProfiles.stateProvinceRegion}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="w-100 lines mt-4"></div>
                    <div class="col">
                        <!-- change password -->
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
                        <h4 class="mt-5">Change password</h4>
                        <p class="mt-4">
                            Click here below on the button if you want to change your password.
                            When you clicked on the button go to your email and change your email.
                        </p>
                        <button class="btn btn-primary mt-2" @click="resetPassword">Change my password</button>
                    </div>
                    <div class="gap"></div>
                </div>
            </div>

            <!-- Your projects -->
            <div class="col-md-5 mxHeight">
                <div class="card w-100">
                    <h3 class="card-title redText mt-2 mx-auto">Your projects</h3>
                    <!-- alert when project is deleted -->
                    <div class="row" v-if="projectIsGone">
                        <div class="col">
                            <div class="alert alert-success alert-dismissible fade show w-100" role="alert">
                                Your project is deleted
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="w-100 lines mt-2 mb-5"></div>
                    <!-- v-for -->
                    <div v-for="project of addProject" :key="project['.key']">
                        <!-- v-if -->
                        <div v-if="project.emailId == user">
                            <div class="col-md-12 col-sm-10">
                                <div class="col-md-8 cardMain mx-auto mb-4">
                                    <div class="row mr-1 mt-1">
                                        <div class="col">
                                            <h class="float-left">{{project.createdAt}}</h>
                                        </div>
                                        <router-link :to="{ name: 'ProjectDetails', params: {id: project['.key']} }" class="underLine">
                                            <p class="whiteText underLine borderMoreInfo">More info</p>
                                        </router-link>
                                    </div>
                                    <div class="col ml-0">
                                        <h5 class="redText">{{project.projectName}}</h5>
                                        <p>{{project.littleDescription}}</p>
                                    </div>
                                    <div class="bottomCard">
                                        <div class="line"></div>
                                        <span class="infoCard">Website</span>
                                         
                                          
                                        <span class="infoCard float mr-4">{{project.emailId}}</span>
                                        <!-- edit and delete -->
                                        <div v-if="isLoggedIn == true" class="row gap ml-0">
                                            <div class="ml-2">
                                                <img src="@/assets/Icons/delete.png" @click="deleteItem(project['.key']); projectIsGone = true" class="pointer deleteBtn">
                                            </div>
                                            <div class="ml-2">
                                                <router-link :to="{ name: 'Edit', params: {id: project['.key']} }" class="pointer deleteBtn">
                                                    <img src="@/assets/Icons/edit.png" class="pointer deleteBtn">
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div class="gap"></div>
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
            isHidden: false,
            seen: false,
            projectIsGone: false,
            error: '',
            user: '',
            userProfile: [],
            users: [],
            addProject: []
        }
    },
    firebase: {
        userProfile: db.ref('userProfile'),
        users: db.ref('users'),
        addProject: db.ref('addProject')
    },
    methods: {
        resetPassword() {
            // eslint-disable-next-line
            const auth = firebase.auth();
            auth.sendPasswordResetEmail(this.user).then(() => {
                // Email sent.
                this.isHidden = false;
                this.seen = true;
            }).catch((error) => {
                // An error happened.
                this.isHidden = true;
                var x = error.message.toString();
                this.error = x;
            });
        },
        deleteItem(key) {
            this.$firebaseRefs.addProject.child(key).remove();
        }
    },
    mounted() {
        if(firebase.auth().currentUser) {
            this.isLoggedIn = true;
            this.user = firebase.auth().currentUser.email;
            console.log(this.user);
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