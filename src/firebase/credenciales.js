// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const app = firebase.initializeApp({
  projectId: "coru-89936",
  appId: "1:451097858188:web:20dcac372f47b2b27d6ba9",
  storageBucket: "coru-89936.appspot.com",
  locationId: "us-central",
  apiKey: "AIzaSyA-5sK8_3ZKvvc05IhR1zEqQUl0Z7B4DfQ",
  authDomain: "coru-89936.firebaseapp.com",
  messagingSenderId: "451097858188",
  measurementId: "G-3WM5GS4GSZ",
});
// Initialize Firebase
export const auth = getAuth(app);
export const fireStore = getFirestore();
