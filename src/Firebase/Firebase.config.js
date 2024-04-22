// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKom0Cus5jcJuZ7dUBpzIYwkk3W-VubC8",
  authDomain: "form-signin-signup.firebaseapp.com",
  projectId: "form-signin-signup",
  storageBucket: "form-signin-signup.appspot.com",
  messagingSenderId: "1078148010629",
  appId: "1:1078148010629:web:5cf55532e7324bf1010fec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;