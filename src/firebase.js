import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXU12rGbFhrEQy-N7T9_JTWbVF2MQPWlQ",
  authDomain: "loanbook-daf1.firebaseapp.com",
  projectId: "loanbook-daf1",
  storageBucket: "loanbook-daf1.firebasestorage.app",
  messagingSenderId: "314791617140",
  appId: "1:314791617140:web:5b16d993b757c76d32e721"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);