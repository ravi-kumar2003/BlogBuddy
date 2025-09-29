// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "blog-buddy-8b727.firebaseapp.com",
  projectId: "blog-buddy-8b727",
  storageBucket: "blog-buddy-8b727.firebasestorage.app",
  messagingSenderId: "629675349538",
  appId: "1:629675349538:web:25983f748e907558159c7b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);