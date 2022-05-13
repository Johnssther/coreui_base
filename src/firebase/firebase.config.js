// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuPz0lDoatqnnPBAOjee8c1U9mmCb9NTE",
  authDomain: "coysafinance-1f247.firebaseapp.com",
  projectId: "coysafinance-1f247",
  storageBucket: "coysafinance-1f247.appspot.com",
  messagingSenderId: "516955937331",
  appId: "1:516955937331:web:a08de1363ba235eb61e146",
  measurementId: "G-7NE6RH1V7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export default storage;
