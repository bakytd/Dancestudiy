// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0PSrczztDPhNqVKnsoN4md04OZOIByLg",
  authDomain: "farebase-auth-6dd5d.firebaseapp.com",
  projectId: "farebase-auth-6dd5d",
  storageBucket: "farebase-auth-6dd5d.appspot.com",
  messagingSenderId: "480220890712",
  appId: "1:480220890712:web:c73a2bdbfd3c4c7ad52c2d",
  measurementId: "G-FVCPGSZ8EB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);