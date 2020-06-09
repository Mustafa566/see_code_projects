<template>
    <div class="verticalScroll">
        <div class="row ml-5 mt-5">
            <div class="col-md-2 col-sm-10 ml-5 sideBar darkBlueBackGround">
                <div class="sideBarInfo">
                    <h5 class="whiteText mt-2">Keyword:</h5>
                    <input type="text" class="form-control inputHeight">

                    <h5 class="whiteText mt-5">Platform:</h5>

                    <input type="checkbox" aria-label="Checkbox for following text input">
                    <label class="whiteText ml-2">Web</label><br>

                    <input type="checkbox" aria-label="Checkbox for following text input">
                    <label class="whiteText ml-2">Mobile app</label><br>

                    <input type="checkbox" aria-label="Checkbox for following text input">
                    <label class="whiteText ml-2">Desktop application</label><br>

                    <input type="checkbox" aria-label="Checkbox for following text input">
                    <label class="whiteText ml-2">Other</label><br>

                    <h5 class="whiteText mt-5">Programming Language:</h5>
                    <select class="select-standard">
                        <option value="all">Any</option> 
                        <option value="Angular js">Angular js</option> 
                        <option value="C">C</option>
                        <option value="C#">C#</option>
                        <option value="C++">C++</option>
                        <option value="CSS">CSS</option>
                        <option value="Go">Go</option>
                        <option value="HTML">HTML</option>
                        <option value="Java">Java</option>
                        <option value="Javascript">Javascript</option>
                        <option value="JRuby">JRuby</option>
                        <option value="Lua">Lua</option>
                        <option value="C">C</option>
                        <option value="Perl">Perl</option>
                        <option value="PHP">PHP</option>
                        <option value="Python">Python</option>
                        <option value="R">R</option>
                        <option value="React js">React js</option>
                        <option value="Ruby">Ruby</option>
                        <option value="SASS">SASS</option>
                        <option value="SQL">SQL</option>
                        <option value="Swift">Swift</option>
                        <option value="TypeScript">TypeScript</option>
                        <option value="VisualBasic">VisualBasic</option>
                        <option value="Vue js">Vue js</option>
                    </select>                 
                </div>
            </div>
            <div class="col-md-8 col-sm-10 ml-5">
                <div class="row">
                    <div class="col-md-5 cardMain mr-4 mb-4" v-for="project of addProject" :key="project['.key']">
                        <div class="row mr-1 mt-1">
                            <div class="col">
                                <h6 class="float-left">{{project.createdAt}}</h6>
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
                            <span class="infoCard">{{project.projectHomepage}}</span>
                            <img src="@/assets/Icons/blackStar.png" class="favorIcon" @click="isHidden = !isHidden">
                            <img src="@/assets/Icons/star.png" class="favorIcon" v-if="isHidden" @click="isHidden = !isHidden">
                            <span class="infoCard float mr-4">{{project.emailId}}</span>
                            <!-- edit and delete buttons -->
                            <div v-if="isLoggedIn == true" class="row gap ml-0">
                                <div class="ml-2">
                                    <img src="@/assets/Icons/delete.png" @click="deleteItem(project['.key'])" class="pointer deleteBtn">
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
</template>


<script>
import firebase from 'firebase';
import { db } from '../Database';

export default {
    data() {
        return {
            isHidden: false,
            user: '',
            isLoggedIn: false,
            currentUser: false,
            addProject: []
        }
    },
    firebase: {
        addProject: db.ref('addProject')
    },
    methods: {
        deleteItem(key) {
            this.$firebaseRefs.addProject.child(key).remove();
        }
    },
    mounted() {
        if(firebase.auth().currentUser) {
            this.isLoggedIn = true;
            this.user = firebase.auth().currentUser.email;
        }
    }
}
</script>