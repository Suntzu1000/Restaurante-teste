// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOVV2pIduv9VKCF5emKWgiQ0ly4gEJ4nI",
  authDomain: "restaurante-d07a8.firebaseapp.com",
  projectId: "restaurante-d07a8",
  storageBucket: "restaurante-d07a8.appspot.com",
  messagingSenderId: "642340379074",
  appId: "1:642340379074:web:f0f73ac1f89c466f9a5e5b",
  measurementId: "G-0S42ND5BGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);