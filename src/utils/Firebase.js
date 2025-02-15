// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCraea6LRerOJYu4Id4WPKgG1zB76aOOTk",
  authDomain: "project-nx-21614.firebaseapp.com",
  projectId: "project-nx-21614",
  storageBucket: "project-nx-21614.firebasestorage.app",
  messagingSenderId: "609681616639",
  appId: "1:609681616639:web:6eb9f1c47030609d8da6ca",
  measurementId: "G-GMDMDQKZS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(); 
