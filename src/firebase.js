import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmBKYrDrl8mPempYEifzM3OWLNdDdES34",
  authDomain: "portfolio-618b6.firebaseapp.com",
  projectId: "portfolio-618b6",
  storageBucket: "portfolio-618b6.firebasestorage.app",
  messagingSenderId: "723536547056",
  appId: "1:723536547056:web:abc46b98b227aec293c635",
  measurementId: "G-N8W3JH8RM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics, logEvent };
