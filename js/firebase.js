// Firebase
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// const { default: firebase } = require("@firebase/app-compat");
// Info on firebase settings: https://firebase.google.com/docs/web/learn-more#web-version-8
// Info on channel deployment: https://fireship.io/lessons/deploy-multiple-sites-to-firebase-hosting/

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0oHcnRMNo_92xxYWwLwmKIi9tp89Yz6g",
    authDomain: "herheart-5ca67.firebaseapp.com",
    projectId: "herheart-5ca67",
    storageBucket: "herheart-5ca67.appspot.com",
    messagingSenderId: "435629529947",
    appId: "1:435629529947:web:77da4219b313ff7b5b987e",
    measurementId: "G-6Z1Z3BMDQ4"
};

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
