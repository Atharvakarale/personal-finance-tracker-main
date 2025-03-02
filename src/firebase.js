import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADAW-zRW5pKYl7_aT7uQAZ6XrHwE1giTY",
  authDomain: "finance-tracker-b7925.firebaseapp.com",
  projectId: "finance-tracker-b7925",
  storageBucket: "finance-tracker-b7925.firebasestorage.app",
  messagingSenderId: "363478705943",
  appId: "1:363478705943:web:9097d8a881b493d42bb952",
  measurementId: "G-CP9Y5MHYMH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
