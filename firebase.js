// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// CONFIG (yung binigay mo)
const firebaseConfig = {
  apiKey: "AIzaSyDUsDkNGffjKdp8b0fIPswzUSKtXEWE_BI",
  authDomain: "kasipag-a6f31.firebaseapp.com",
  projectId: "kasipag-a6f31",
  storageBucket: "kasipag-a6f31.firebasestorage.app",
  messagingSenderId: "479033864010",
  appId: "1:479033864010:web:6978b8cf0e8686a8731bb3",
  measurementId: "G-Y3M658B7EL"
};

// INIT
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// EXPORT
export { db };