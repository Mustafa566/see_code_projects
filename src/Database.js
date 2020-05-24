import Firebase from 'firebase'
import 'firebase/firestore'

 let config = {
    apiKey: "AIzaSyBmrNxueqShC_R13cd2jI-mKsgykWEpLPA",
    authDomain: "scpdatabase-8ec4c.firebaseapp.com",
    databaseURL: "https://scpdatabase-8ec4c.firebaseio.com",
    projectId: "scpdatabase-8ec4c",
    storageBucket: "scpdatabase-8ec4c.appspot.com",
    messagingSenderId: "140228759785",
    appId: "1:140228759785:web:f7d44df6c2c495c61c2078",
    measurementId: "G-Q1KHD6RT5E"
  };
  
let app = Firebase.initializeApp(config)
export const db = app.database()