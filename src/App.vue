<template>
  <div id="app">
    <nav class="navbar navColor navHide">
      <router-link :to="{ name: 'Index' }" class="navbar-brand headerText">See Code Projects</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <p class="whiteText">{{user}}</p>
      <ul class="nav justify-content-end">
        <router-link :to="{ name: 'Projects' }" class="nav-link headerSubText mr-5">Projects</router-link>
        <router-link :to="{ name: 'Faq' }" class="nav-link headerSubText mr-5">FAQ</router-link>
        <router-link :to="{ name: 'Login' }" class="nav-link headerSubText" v-if="!isLoggedIn">Login</router-link>
        <router-link :to="{ name: 'Profile' }" class="nav-link headerSubText mr-5" v-if="isLoggedIn">Profile</router-link>
        <router-link :to="{ name: 'AddProject' }" class="nav-link headerSubText mr-5" v-if="isLoggedIn">Add project</router-link>
        <div class="nav-link headerSubText pointer" @click="logout" v-if="isLoggedIn">Logout</div>
      </ul>
    </nav>
      <router-view/>
    <footer class="footer mt-5 py-3 darkBlueBackGround">
      <div class="container text-center">
        <span class="redText">See Code Projects &copy; 2020</span>
      </div>
    </footer>
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
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.push('/Login')
        location.reload();
      })
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
        console.log(this.user);
        console.log(this.isLoggedIn);
      } else {
        console.log('no user'); 
      }
    });
  }
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

$darkbluecolor: #182b3a;
$redcolor: #dd1843;
$white: #fff;
$font: 'Righteous', cursive;
$whiteSmoke: #f3f3f3;

/* Stardart class */

.redText {
  color: $redcolor;
}

.whiteText {
  color: $white;
}

.darkBlueText {
  color: $darkbluecolor;
}

.redBackGround {
  background-color: $redcolor;
}

.whiteBackGround {
  background-color: $white;
}

.darkBlueBackGround {
  background-color: $darkbluecolor;
}

.horizonCenter {
  margin: 0 auto;
}

.gap {
  padding-top: 50px;
}

.pointer {
  cursor: pointer;
}

.underLine:hover {
  text-decoration: none;
  color: $darkbluecolor;
}

/* Nav */
.navColor {
  background-color: $darkbluecolor;
  height: 120px;
}

.headerText, .headerText:hover {
  color: $white;
  font-family: $font;
  font-size: 28px;
}

.headerSubText, .headerSubText:hover {
  color: $white;
  font-family: $font;
  font-size: 15px;
}

.headerSubText:hover, .headerSubText:active, .headerSubText:focus {
  background-color: $redcolor;
  border-radius: 20px;
}

/* Index.vue */
.wave {
  background-color: $darkbluecolor;
  height: 400px;
}

.header {
  padding-top: 100px;
}

.vector {
  width: 500px;
  height: 500px;
  margin-top: -100px;
}

.textSize {
  font-size: 3rem;
}

.textSize2 {
  font-size: 1.5rem;
}

.underline::after {
  margin: 1rem auto;
  content: "";
  display: block;
  max-width: 3rem;
  height: 2px;
  background-color: #182b3a;
}

.numberText {
  font-family: Catamaran;
  color: $redcolor;
  font-size: 2.75rem;
}

.verticalScroll {
  overflow-y: hidden;
  overflow-x: hidden;
}

/* Login page */
.loginMain {
  width: 500px;
  height: 500px;
  margin: 0 auto;
  border-radius: 30px;
  background-color: $darkbluecolor;
}

.loginHeader {
  margin-right: 0px;
  margin-left: 0px;
  padding: 15px;
  border-radius: 30px 30px 0px 0px;
}

/* Project page */
.sideBar {
  width: 150px;
  height: 100vh;
  border-radius: 30px;
}

.inputHeight {
  height: 30px;
}

.select-standard {
  width: 100%;
  border-width: 1px;
  border-color: #718096;
  font-size: .875rem;
  outline: 0;
  background-color: #fff;
  border-radius: .125rem;
}

.cardMain {
  border: 1px solid black;
  border-radius: 10px;
  height: 250px;
}

.cardMain:hover {
  box-shadow: 0 10px 10px #a7a7a7;
  margin-top: -10px;
}

.infoCard {
  position:absolute;
  bottom: 0;
}

.float {
  position:absolute;
  bottom: 0;
  right: 0;
}

.line {
  width: 100%;
  height: 3px;
  background-color: black;
  bottom: 25px;
  position: absolute;
  left: 0;
}

.favorIcon {
  width: 20px;
  height: 20px;
  bottom: 35px;
  position: absolute;
  right: 20px;
  cursor: pointer;
}


/* Add project page */
.mainForm {
  background-color: $whiteSmoke;
  border-radius: 20px;
}

.submitProject {
  margin-left: 10%;
}

.cardMainPreview {
  border: 1px solid black;
  border-radius: 10px;
  height: 250px;
  margin: 0 auto;
}

/* Project details */

</style>
