// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_vy0OaJg_7pkGPeWjfASb7R93bfz7ygo",
  authDomain: "fir-tutorial-23f99.firebaseapp.com",
  projectId: "fir-tutorial-23f99",
  storageBucket: "fir-tutorial-23f99.appspot.com",
  messagingSenderId: "786728222840",
  appId: "1:786728222840:web:0c39f505f527595749ad8d",
  measurementId: "G-WTSJ61DMTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);

