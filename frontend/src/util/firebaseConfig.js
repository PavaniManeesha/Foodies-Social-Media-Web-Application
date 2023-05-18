// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq-bzeOft1YOinRIXPdSG2-jS-6XBuV4I",
  authDomain: "paf-project-7a03b.firebaseapp.com",
  projectId: "paf-project-7a03b",
  storageBucket: "paf-project-7a03b.appspot.com",
  messagingSenderId: "677468356752",
  appId: "1:677468356752:web:078cc1f55ece7bd10b9815",
  measurementId: "G-J78CMWK69V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
