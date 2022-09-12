// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libra
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN0vghxYuQGxIQ7Bq475tY18Q3VKqtRc4",
  authDomain: "kachabazar-store-5d0c4.firebaseapp.com",
  projectId: "kachabazar-store-5d0c4",
  storageBucket: "kachabazar-store-5d0c4.appspot.com",
  messagingSenderId: "672173468145",
  appId: "1:672173468145:web:8c634a2e39b8c75af2fc50"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp)
