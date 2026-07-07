import { useState } from 'react';
import './FloatingLabelInput.css'; // Import the styles below

function FloatingLabelInput() {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // The label floats up if the input is actively focused OR if it already has text inside
  const isFloating = isFocused || value.length > 0;

  const isButtonDisabled = !value.includes('@');

  return (
    <>
  <div className="flex flex-col items-center">
      <div className="input-container flex justify-center items-center">
      <label className={`floating-label ${isFloating ? 'float' : ''}`}>
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
    <br />
    <button 
        disabled={isButtonDisabled}
        className="px-50 py-4 bg-[#1a1a1a] disabled:bg-gray-400 text-white rounded-4xl"
      >
        Submit
      </button>
  </div>
    </>
    
  );
}

export default FloatingLabelInput;
