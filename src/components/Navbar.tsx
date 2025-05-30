import React, { useState, useEffect } from "react";
import { BulbOutlined, MoonOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useThemeStore } from "../stores/themeStore";

function Navbar() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <div className="navbar bg-content shadow-sm h-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ></svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
                <NavLink to="/" className="text-base">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/projects" className="text-base">
                    Projects
                </NavLink>
            </li>
            <li>
                <NavLink to="/experience" className="text-base">
                    Experience
                </NavLink>
            </li>
            <li>
                <NavLink to="/skills" className="text-base">
                    Skills
                </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img
            src="/tsuchinokobg.png"
            alt="Tsuchinoko Logo"
            className="h-10 w-10 rounded-full inline-block mr-2"
          />
          NexWan
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            <li>
                <NavLink to="/" className="text-base">
                Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/projects" className="text-base">
                Projects
                </NavLink>
            </li>
            <li>
                <NavLink to="/experience" className="text-base">
                Experience
                </NavLink>
            </li>
            <li>
                <NavLink to="/skills" className="text-base">
                Skills
                </NavLink>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button onClick={toggleTheme} className="btn btn-circle">
          {theme === "light" ? <MoonOutlined /> : <BulbOutlined />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
