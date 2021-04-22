import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuAflZ_Q8xo4x29Odds1SByeUIHfSvSW0",
    authDomain: "hardware-inventory-app.firebaseapp.com",
    projectId: "hardware-inventory-app",
    storageBucket: "hardware-inventory-app.appspot.com",
    messagingSenderId: "76677229679",
    appId: "1:76677229679:web:e553f3c9cfa7ec77a0f19a"
  };

//Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
