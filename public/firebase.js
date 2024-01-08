// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeOO0Xk09NfDgfqrJlzzEERvmtJZp7a7w",
  authDomain: "aerith-morgenstern-web.firebaseapp.com",
  projectId: "aerith-morgenstern-web",
  storageBucket: "aerith-morgenstern-web.appspot.com",
  messagingSenderId: "685290413123",
  appId: "1:685290413123:web:0091842fe6b76a5ead48f6",
  measurementId: "G-8NR59N2XTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);