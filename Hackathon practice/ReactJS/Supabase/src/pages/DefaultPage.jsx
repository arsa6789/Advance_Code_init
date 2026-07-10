import React from "react";
import Imag from "../assets/Untitled.png";
import Vid from "../assets/video.mp4";
import { useNavigate } from "react-router-dom";
const r = React;
const DefaultPage = () => {
  console.log(r);

  const navigate = useNavigate();
  const goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <section className="w-full bg-[#d2e823] min-h-screen pt-36 pb-12 px-6 sm:px-6 lg:pt-44">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left col */}
          <div className="lg:col-span-6 flex flex-col justify-center text-[#1e392a]">
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
          <div className="lg:col-span-6 w-full flex justify-center">
            <div className="relative w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-md aspect-683/640">
              <img
                src={Imag}
                className="w-full h-full object-cover"
                alt="Image personalized"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#2665d6] min-h-screen pt-36 pb-12 px-6 sm:px-6 lg:pt-44">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (Image) */}
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-md aspect-4/3 lg:aspect-square">
              <video
                src={Vid}
                className="w-full h-full object-cover object-right"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          {/* Right Column (Text) */}
          <div className="lg:col-span-6 flex flex-col justify-start text-[#d2e823]">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.05] mb-6">
              Create and customize your Linktree in minutes
            </h1>
            <p className="text-base md:text-lg font-medium max-w-xl text-white leading-relaxed mb-8">
              Connect all your content across social media, websites, stores and
              more in one link in bio. Customize every detail or let Linktree
              automatically enhance it to match your brand and drive more
              clicks.
            </p>

            <button
              type="button" // <--- Isko 'submit' se 'button' lazmi karein
              onClick={goToSignUp}
              className="bg-[#d2e823] text-black font-bold text-md px-8 w-80 py-4 rounded-full hover:bg-yellow-400 transition-colors whitespace-nowrap"
            >
              Get started for free
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DefaultPage;
