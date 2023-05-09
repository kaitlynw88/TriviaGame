// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABREW8a0qC4k9XYuPVQjet2D4ewdJlx6w",
    authDomain: "triviagame-39c00.firebaseapp.com",
    projectId: "triviagame-39c00",
    storageBucket: "triviagame-39c00.appspot.com",
    messagingSenderId: "75859503832",
    appId: "1:75859503832:web:b55df33c0d50499b56c5ad",
    measurementId: "G-MTVXD9CN7F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

