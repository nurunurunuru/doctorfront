// src/firebase/firebase.config.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
  apiKey: "AIzaSyCwb3fneg5lUZwTvUyJvviJ5HUTGx7CCFA",
  authDomain: "doctors-portal-a5662.firebaseapp.com",
  projectId: "doctors-portal-a5662",
  storageBucket: "doctors-portal-a5662.firebasestorage.app",
  messagingSenderId: "301790426330",
  appId: "1:301790426330:web:e8239530a2863c8835e1e3",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
