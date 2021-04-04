import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Need to update below config
const config = {
    apiKey: "AIzaSyBGmcdrNT7bE8lOU7Kwayn4Dfr-1pRJBPc",
  authDomain: "catshardwarestore.firebaseapp.com",
  projectId: "catshardwarestore",
  storageBucket: "catshardwarestore.appspot.com",
  messagingSenderId: "767663159363",
  appId: "1:767663159363:web:c4f756bb33b8aa7c3efcf6",
  measurementId: "G-YTXJCKQ2BH"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
const auth = firebase.auth();
export {
    auth,
    firebase
};