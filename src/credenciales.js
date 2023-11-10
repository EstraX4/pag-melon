// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlYxcmgdsJTDdUzDy5j1TvVjAiiKQ2rw8",
  authDomain: "melon-page.firebaseapp.com",
  projectId: "melon-page",
  storageBucket: "melon-page.appspot.com",
  messagingSenderId: "389012227605",
  appId: "1:389012227605:web:92d1b9d6b41c1ca76a301c",
  measurementId: "G-WGVD22QWR3"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;