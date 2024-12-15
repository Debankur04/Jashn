import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA3PeAqkTlXj3JETJTc4zDa9do0jfhgxl4",
    authDomain: "jashn-42930.firebaseapp.com",
    projectId: "jashn-42930",
    storageBucket: "jashn-42930.firebasestorage.app",
    messagingSenderId: "920273816280",
    appId: "1:920273816280:web:1fea30d65478faafdf65ad"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
