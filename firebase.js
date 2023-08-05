import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDarPAXeJXapEel0_OBqLfaeutjk6Djj2A",
    authDomain: "grounded-camp-393809.firebaseapp.com",
    projectId: "grounded-camp-393809",
    storageBucket: "grounded-camp-393809.appspot.com",
    messagingSenderId: "924935503327",
    appId: "1:924935503327:web:8c88713240a35a52d8d86a",
    measurementId: "G-PPPF2T36P0"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);