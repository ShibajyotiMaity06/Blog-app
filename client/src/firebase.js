// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-7401f.firebaseapp.com",
  projectId: "mern-blog-7401f",
  storageBucket: "mern-blog-7401f.appspot.com",
  messagingSenderId: "955841419100",
  appId: "1:955841419100:web:d2870899a686ad9fd25399"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);