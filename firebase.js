// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArJY5symsD_iT2Kjfvb-Oghy58ApUXEt8",
  authDomain: "chat-app-22-f6fc9.firebaseapp.com",
  projectId: "chat-app-22-f6fc9",
  storageBucket: "chat-app-22-f6fc9.appspot.com",
  messagingSenderId: "368894870744",
  appId: "1:368894870744:web:dd8c8bc5adb6e87acfc3ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {auth,db};