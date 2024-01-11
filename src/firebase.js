// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZDpGuQpKo5DPZyEfD4N1DOcHA1FU1x1Y",
  authDomain: "twitter-clone-b56e5.firebaseapp.com",
  projectId: "twitter-clone-b56e5",
  storageBucket: "twitter-clone-b56e5.appspot.com",
  messagingSenderId: "763980771149",
  appId: "1:763980771149:web:20fdcf25d6eafc3c155104",
  measurementId: "G-MJP9YHDHWW"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
export const db = getFirestore(app);
