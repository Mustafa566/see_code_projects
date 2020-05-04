import Firebase from 'firebase'

 let config = {
    apiKey: "AIzaSyBPtzEKhjKaA4VpqCS9bXarKGMAstjdDlE",
    authDomain: "scp-db-796e2.firebaseapp.com",
    databaseURL: "https://scp-db-796e2.firebaseio.com",
    projectId: "scp-db-796e2",
    storageBucket: "scp-db-796e2.appspot.com",
    messagingSenderId: "377049301714",
    appId: "1:377049301714:web:9285f899176ff778b7e30b",
    measurementId: "G-XSFFJN35WF"
  };
let app = Firebase.initializeApp(config)
export const db = app.database()