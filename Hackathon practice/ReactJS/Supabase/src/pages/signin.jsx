import React from "react";
import imag from "../assets/banner1.png";
import FloatingLabelInput1 from '../components/inputButtonCopy'
const r = React;

const Signup = () => {
  console.log(r);

  return (
    <div className="grid grid-cols-2 w-screen h-screen">
      <div className="">
        <img
          src={imag}
          alt=""
          className="w-screen h-screen object-cover object-center"
        />
      </div>
      <div className="bg-white p-4">
        <br />
        <span className="font-bold text-[30px] m-10">
          <a href="/">Linktree🌴</a>
        </span>
        <br />
        <br />
        <br />
        <form className="flex flex-col justify-center items-center">
          <h2 className="font-bold text-4xl">Welcome back</h2>
          <br />
          <p className="text-gray-600 py-2">Log in to your Linktree</p>
          <div className="m-7 flex justify-center items-center">
            <FloatingLabelInput1/>
          </div>
          <span className="text-[10px] text-gray-500">By clicking <span className="font-bold">Create account</span>, you agree to Linktree's <a href="linktr.ee/privacy" ><u>privacy notice</u></a>, <a href="linktr.ee/terms"><u>T&Cs</u></a> and to <br /> receive offers, news and updates.</span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
