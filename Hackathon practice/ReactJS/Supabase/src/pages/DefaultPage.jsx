import React from "react";
import Imag from "../assets/Untitled.png";
const r = React;
const DefaultPage = () => {
  console.log(r);
  return (
    <>
      <section className="w-full bg-[#d2e823] min-h-screen pt-36 pb-12 px-6 sm:px-6 lg:pt-44">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left col */}
          <div className="lg:col-span-7 flex flex-col justify-center text-[#1e392a]">
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.05] mb-6">
              A link in bio built for you.
            </h1>
            <p className="text-base md:text-lg font-medium max-w-xl leading-relaxed mb-8">
              Join 70M+ people using Linktree for their link in bio. One link to
              help you share everything you create, curate and sell from your
              Instagram, TikTok, Twitter, YouTube and other social media
              profiles.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-xl w-full"
            >
              <div className="flex-1 bg-white rounded-xl p-4 flex items-center shadow-sm">
                <span className="text-gray-400 font-semibold select-none">
                  linktr.ee/
                </span>
                <input
                  type="text"
                  placeholder="username"
                  className="w-full bg-transparent focus:outline-none text-black font-semibold pl-0.5"
                />
              </div>
              <button
                type="submit"
                className="bg-[#1e392a] text-[#d2e823] font-bold text-md px-8 py-4 rounded-full hover:bg-[#15271d] transition-colors whitespace-nowrap"
              >
                Get started for free
              </button>
            </form>
          </div>
          {/* Right Col */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-md aspect-4/3 lg:aspect-5/6">
              <img
                src={Imag}
                className="w-full h-full  object-cover object-right"
                alt="Image personalized"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DefaultPage;
