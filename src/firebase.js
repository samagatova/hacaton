// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7MmskbH2xuS0ncoBx-RTU-DKtXnfTPbI",
  authDomain: "hacaton-af9bd.firebaseapp.com",
  projectId: "hacaton-af9bd",
  storageBucket: "hacaton-af9bd.appspot.com",
  messagingSenderId: "656038655386",
  appId: "1:656038655386:web:c0b453289fa1f555e03623",
  measurementId: "G-Z5CS9ZHQVP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
