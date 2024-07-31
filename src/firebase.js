import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAcQFjlrGAFlNwBqpYuI_d-P8Ey9c14ICI",
  authDomain: "chat-app-71b80.firebaseapp.com",
  projectId: "chat-app-71b80",
  storageBucket: "chat-app-71b80.appspot.com",
  messagingSenderId: "1004047933938",
  appId: "1:1004047933938:web:99511e040fcc54d59a4b6b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
