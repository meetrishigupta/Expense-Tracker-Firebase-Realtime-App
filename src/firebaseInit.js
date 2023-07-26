import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcyKEKM89fO0P46J31fo7DMX9e5WkYUaM",
  authDomain: "expense-tracker-3c4c9.firebaseapp.com",
  projectId: "expense-tracker-3c4c9",
  storageBucket: "expense-tracker-3c4c9.appspot.com",
  messagingSenderId: "554021208661",
  appId: "1:554021208661:web:1c461a7f93f88d215d4adc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
