// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAsCpURibImucSir1nt9uzpWrHktKpWvIg",
  authDomain: "tinderclone-7f468.firebaseapp.com",
  projectId: "tinderclone-7f468",
  storageBucket: "tinderclone-7f468.appspot.com",
  messagingSenderId: "642905065686",
  appId: "1:642905065686:web:ea894e654abf0f1a042177",
  measurementId: "G-RBYFNY629M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;
