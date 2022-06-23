// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDATEcZz5zmk3OqJA-WBjmD9jrNuH0wYcg",
  authDomain: "ac-crud.firebaseapp.com",
  projectId: "ac-crud",
  storageBucket: "ac-crud.appspot.com",
  messagingSenderId: "1050698901985",
  appId: "1:1050698901985:web:80c445d5673a179b01caa0",
  measurementId: "G-NMZEG71MPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);