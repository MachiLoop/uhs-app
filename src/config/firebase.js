// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3H6-QrhjeR0UsgKVcaff6BRB5RgVUJC8",
  authDomain: "uhs-project-fd434.firebaseapp.com",
  projectId: "uhs-project-fd434",
  storageBucket: "uhs-project-fd434.appspot.com",
  messagingSenderId: "291568257719",
  appId: "1:291568257719:web:d6ece5ca2cbd573b995b32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);