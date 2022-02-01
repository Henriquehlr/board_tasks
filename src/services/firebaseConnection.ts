import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAgAr8qpsAkEFVWsA84PVjUi8q7Ry8CqmM",
    authDomain: "boardapp-80e88.firebaseapp.com",
    projectId: "boardapp-80e88",
    storageBucket: "boardapp-80e88.appspot.com",
    messagingSenderId: "617078314822",
    appId: "1:617078314822:web:7dfefa81a96c7a3889b747",
    measurementId: "G-W2LSVPJMX5"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;