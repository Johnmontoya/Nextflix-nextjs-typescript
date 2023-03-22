// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA0Ab3LuHO5vY2RRlPdfMYUu_MhJmLCePs",
  authDomain: "netflix-nextjs-typescrip-45ea4.firebaseapp.com",
  projectId: "netflix-nextjs-typescrip-45ea4",
  storageBucket: "netflix-nextjs-typescrip-45ea4.appspot.com",
  messagingSenderId: "708879618401",
  appId: "1:708879618401:web:52cb1643d3459b78d0f520",
  measurementId: "G-FJSR2ENHXG"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
//const analytics = getAnalytics(app);

export default app;
export { auth, db }