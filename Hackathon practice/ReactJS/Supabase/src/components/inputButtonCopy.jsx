import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore"; 

import "./FloatingLabelInput.css";

const firebaseConfig = {
  apiKey: "API-KEY",
  authDomain: "AUTH-DOMAIN",
  projectId: "PROJ-ID",
  storageBucket: "STORAGE",
  messagingSenderId: "SENDER-ID",
  appId: "ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function FloatingLabelInput1() {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");

  const [isFocused, setIsFocused] = useState(false);
  const [isFocused1, setIsFocused1] = useState(false);

  const isFloating = isFocused || value.length > 0;
  const isFloating1 = isFocused1 || value1.length > 0;

  const isButtonDisabled = !value.includes("@") || value1.length < 6;

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const usersRef = collection(db, "users");
      
      // Query Firestore for a document matching BOTH email and password
      const q = query(
        usersRef, 
        where("email", "==", value), 
        where("password", "==", value1)
      );
      
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        alert("Login successful! Welcome back.");
        // You can handle redirection or state updates here
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error logging in: ", error);
      alert("Error logging in. Check console for details.");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="input-container flex justify-center items-center">
          <label className={`floating-label ${isFloating ? "float" : ""}`}>
            Email
          </label>
          <input
            type="email"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        
        <div className="input-container flex justify-center items-center">
          <label className={`floating-label ${isFloating1 ? "float" : ""}`}>
            Password
          </label>
          <input
            type="password"
            value={value1} // FIXED: Changed from value to value1
            onChange={(e) => setValue1(e.target.value)}
            onFocus={() => setIsFocused1(true)}
            onBlur={() => setIsFocused1(false)}
          />
        </div>

        <br />

        <button
          disabled={isButtonDisabled}
          onClick={(e) => handleLogin(e)}
          className="px-50 py-4 bg-[#1a1a1a] disabled:bg-gray-400 text-white rounded-4xl"
        >
          Log In
        </button>
      </div>
    </>
  );
}

export default FloatingLabelInput1;