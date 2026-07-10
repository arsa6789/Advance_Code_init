import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { query, where, getDocs } from "firebase/firestore";
import "./FloatingLabelInput.css";
import { useNavigate } from "react-router-dom";

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

function FloatingLabelInput() {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");

  const [isFocused, setIsFocused] = useState(false);
  const [isFocused1, setIsFocused1] = useState(false);

  const isFloating = isFocused || value.length > 0;
  const isFloating1 = isFocused1 || value1.length > 0;

  const isButtonDisabled = !value.includes("@") || value1.length < 6;

  const navigate = useNavigate();

const checkUserExists = async (emailToCheck) => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", emailToCheck));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty; // Returns true if user exists, false if not
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const usersCollection = collection(db, "users");
      const userExists = await checkUserExists(value);
      
      if (userExists) {
        alert("This email is already registered! Try logging in.");
        return; // Stop the execution early
      }

      await addDoc(usersCollection, {
        email: value,
        password: value1,
        createdAt: new Date(),
      });

      alert("Sign up successful! Data saved to Firestore.");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error signing up. Check console for details.");
    }
  };

  const db = getFirestore()


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
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            onFocus={() => setIsFocused1(true)}
            onBlur={() => setIsFocused1(false)}
          />
        </div>

        <br />

        <button
          disabled={isButtonDisabled}
          onClick={handleSignUp}
          className="px-50 py-4 bg-[#1a1a1a] disabled:bg-gray-400 text-white rounded-4xl"
        >
          Sign Up
        </button>
      </div>
    </>
  );
}

export default FloatingLabelInput;
