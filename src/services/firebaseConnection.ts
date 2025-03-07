// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYnggxBYuLwypTRUJRGBYOTjmF2v9_TRU",
  authDomain: "reactlinks-bae14.firebaseapp.com",
  projectId: "reactlinks-bae14",
  storageBucket: "reactlinks-bae14.firebasestorage.app",
  messagingSenderId: "956173378826",
  appId: "1:956173378826:web:be0b170ab18753b6c206f3",
  measurementId: "G-EE1NZ3HF7H"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db, analytics};