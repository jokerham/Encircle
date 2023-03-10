// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxGoaR0vuFeYJeuESKxPBmKtqHeo1Ia9o",
  authDomain: "encircle-mizuho.firebaseapp.com",
  databaseURL: "https://encircle-mizuho-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "encircle-mizuho",
  storageBucket: "encircle-mizuho.appspot.com",
  messagingSenderId: "149895571456",
  appId: "1:149895571456:web:b1e801359dfc7ea6bbd0e5",
  measurementId: "G-W3ZZX4PF39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);