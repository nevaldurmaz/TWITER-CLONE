import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4jH7ueFgZi8PihNZeF_GLETYWvOcD7uQ",
  authDomain: "twiter-clone-b44a3.firebaseapp.com",
  projectId: "twiter-clone-b44a3",
  storageBucket: "twiter-clone-b44a3.firebasestorage.app",
  messagingSenderId: "337759704055",
  appId: "1:337759704055:web:a3420070223fd757b394f2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
