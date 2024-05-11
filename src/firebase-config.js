import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDmZ-VtSRXzUFKsmy92R7dZabiQAnatXX8",
  authDomain: "chatapp-a52be.firebaseapp.com",
  projectId: "chatapp-a52be",
  storageBucket: "chatapp-a52be.appspot.com",
  messagingSenderId: "918649639067",
  appId: "1:918649639067:web:e7c315e50376253ae1363e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider= new GoogleAuthProvider();
export const db= getFirestore(app);