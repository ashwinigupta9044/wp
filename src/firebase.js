import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAI2nHamONTU7jSqKX8e3DUe3Wln2oiCDI",
  authDomain: "wptool-edfc6.firebaseapp.com",
  projectId: "wptool-edfc6",
  storageBucket: "wptool-edfc6.firebasestorage.app",
  messagingSenderId: "217477386141",
  appId: "1:217477386141:web:ae031c155d9c97d420e974"
};

// ✅ IMPORTANT: export करना है
export const app = initializeApp(firebaseConfig);