// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "cloud-file-manager-3bd19.firebaseapp.com",
  projectId: "cloud-file-manager-3bd19",
  storageBucket: "cloud-file-manager-3bd19.firebasestorage.app",
  messagingSenderId: "446299204747",
  appId: "1:446299204747:web:e101be55610144d98c788e",
  measurementId: "G-QHWPTKTEES"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

