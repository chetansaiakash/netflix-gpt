// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA31NLPbWHKZ0v81tFpkikdAp0jD4L4WCY",
  authDomain: "netflixgpt-9f81a.firebaseapp.com",
  projectId: "netflixgpt-9f81a",
  storageBucket: "netflixgpt-9f81a.appspot.com",
  messagingSenderId: "435212722798",
  appId: "1:435212722798:web:7f60355197b963d105bc7f",
  measurementId: "G-F9ML5RJT8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();