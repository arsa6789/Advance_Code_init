import { NavLink } from "react-router-dom";
import React from "react";
const r = React;

function Navbar() {
    console.log(r)
  return (
    <>
      <div className="navbar absolute top-0 left-0 right-0 z-50 flex items-center justify-between bg-white py-5 gap-6 whitespace-nowrap my-6 mx-4 sm:mx-10 rounded-full px-10 shadow-sm max-w-7xl lg:mx-auto">
        <div className="flex items-center gap-6">
          <div className="logo text-2xl font-bold text-black">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Linktree🌴
            </NavLink>
          </div>
          <ul className="nav-links flex gap-5 py-2 text-gray-600">
            <li>
              <NavLink
                to="/products"
                end
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <span className="font-medium px-3 py-2 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors">
                  Products
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/templates"
                end
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <span className="font-medium px-3 py-2 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors">
                  Templates
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/marketplace"
                end
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <span className="font-medium px-3 py-2 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors">
                  Marketplace
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/learn"
                end
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <span className="font-medium px-3 py-2 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors">
                  Learn
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                end
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <span className="font-medium px-3 py-2 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors">
                  Pricing
                </span>
              </NavLink>
            </li>
          </ul>
        </div>

        <ul className="flex gap-5">
          <li>
            <NavLink to='/signin' end className="text-black">
                <input
              className="bg-[#eff0ec] text-black font-semibold rounded-xl px-5 h-11 cursor-pointer hover:bg-gray-200 transition-colors"
              type="button" value='Log In'
            />
            </NavLink>
          </li>
          <li>
            <NavLink to='/signup' end className="text-white">
                <input
              className="bg-[#1e2330] text-white font-semibold rounded-full px-6 h-11 cursor-pointer hover:bg-opacity-90 transition-all"
              type="button"
              value="Sign up free"
            />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
