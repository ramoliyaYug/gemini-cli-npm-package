import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDBzbsAy7BFTttW2cXzz5ZoTIJCEn2UGIA",
    authDomain: "chatappandroid-4a32b.firebaseapp.com",
    databaseURL: "https://chatappandroid-4a32b-default-rtdb.firebaseio.com",
    projectId: "chatappandroid-4a32b",
    storageBucket: "chatappandroid-4a32b.firebasestorage.app",
    messagingSenderId: "680041643346",
    appId: "1:680041643346:web:3cf5c1d47a45fcff278e8b",
    measurementId: "G-0TNVQBWQ2B"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);