// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCixJCfAWyKJSnxv7MV8d9LmbZAkd59ZJk",
  authDomain: "my-react-project-836a9.firebaseapp.com",
  projectId: "my-react-project-836a9",
  storageBucket: "my-react-project-836a9.appspot.com",
  messagingSenderId: "318750656740",
  appId: "1:318750656740:web:0421908e07a9d454e804f1",
  measurementId: "G-BT31KB1DG1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
