import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAv7nR2yf6qZDfURiG5OG7_llIQWb6EpJA",
  authDomain: "userform-cd03d.firebaseapp.com",
  projectId: "userform-cd03d",
  storageBucket: "userform-cd03d.firebasestorage.app",
  messagingSenderId: "766236048799",
  appId: "1:766236048799:web:aad812703b62bd951e91aa",
  measurementId: "G-0BQLFTQW6P",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);