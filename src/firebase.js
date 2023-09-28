// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkhHeqgd4Sbi_nSzh05c8IxCGOAyd6beo",
  authDomain: "podcast-platform-app-22496.firebaseapp.com",
  projectId: "podcast-platform-app-22496",
  storageBucket: "podcast-platform-app-22496.appspot.com",
  messagingSenderId: "638824923031",
  appId: "1:638824923031:web:8f14dcd8fbb5d83b910ed2",
  measurementId: "G-DD0QY4WPD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };