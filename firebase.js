// Firebase SDK (MODULAR - PRODUCTION READY)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyDUsDkNGffjKdp8b0fIPswzUSKtXEWE_BI",
  authDomain: "kasipag-a6f31.firebaseapp.com",
  projectId: "kasipag-a6f31",
  storageBucket: "kasipag-a6f31.firebasestorage.app",
  messagingSenderId: "479033864010",
  appId: "1:479033864010:web:6978b8cf0e8686a8731bb3",
  measurementId: "G-Y3M658B7EL"
};

// INIT CORE
const app = initializeApp(firebaseConfig);

// SERVICES
const db = getFirestore(app);
const auth = getAuth(app);

// EXPORT (BANK CORE ENGINE)
export { app, db, auth };