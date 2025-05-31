import { BulbOutlined, MoonOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useThemeStore } from "../stores/themeStore";

function Navbar() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <div className="navbar bg-content shadow-sm h-full">
      <div className="navbar-start 2xl:justify-center">
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
              <NavLink
                to="/"
                viewTransition
                className={({ isActive }) =>
                  `text-base px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "hover:bg-base-200 text-content"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="projects"
                viewTransition
                className={({ isActive }) =>
                  `text-base px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "hover:bg-base-200 text-content"
                  }`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="experience"
                viewTransition
                className={({ isActive }) =>
                  `text-base px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "hover:bg-base-200 text-content"
                  }`
                }
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="skills"
                viewTransition
                className={({ isActive }) =>
                  `text-base px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "hover:bg-base-200 text-content"
                  }`
                }
              >
                Skills
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl 2xl:text-3xl">
          <img
            src={theme === "valentine" ? "/tsuchinokobg.png" : "/tsuchinoko_dark.png"}
            alt="Tsuchinoko Logo"
            className="h-10 w-10 rounded-full inline-block mr-2 2xl:h-12 2xl:w-12"
          />
          NexWan
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className={`menu menu-horizontal px-1 *:2xl:text-2xl`}>
          <li>
            <NavLink
              to="/"
              viewTransition
              className={({ isActive }) =>
                `text-base px-3 py-2 rounded-md 2xl:text-2xl transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "hover:bg-base-200 text-content"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="projects"
              viewTransition
              className={({ isActive }) =>
                `text-base px-3 py-2 rounded-md transition-colors 2xl:text-2xl ${
                  isActive
                    ? "bg-primary text-white"
                    : "hover:bg-base-200 text-content"
                }`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="experience"
              viewTransition
              className={({ isActive }) =>
                `text-base px-3 py-2 rounded-md 2xl:text-2xl transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "hover:bg-base-200 text-content"
                }`
              }
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="skills"
              viewTransition
              className={({ isActive }) =>
                `text-base px-3 py-2 rounded-md 2xl:text-2xl transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "hover:bg-base-200 text-content"
                }`
              }
            >
              Skills
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end 2xl:justify-center">
        <button onClick={toggleTheme} className="btn btn-circle 2xl:btn-lg">
          {theme === "light" ? <MoonOutlined /> : <BulbOutlined />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
