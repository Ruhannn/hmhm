// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA44uNdLRwQl7c8t4Z8XKQuX3HTPO_OYzQ",
  authDomain: "fir-life-2.firebaseapp.com",
  projectId: "fir-life-2",
  storageBucket: "fir-life-2.appspot.com",
  messagingSenderId: "622076615577",
  appId: "1:622076615577:web:cb10442324fc2c5b145108"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth