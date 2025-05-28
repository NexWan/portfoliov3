import { Outlet } from "react-router";
import { BulbOutlined, MoonOutlined, TwitterOutlined, MailOutlined, GithubOutlined, DiscordOutlined, LinkedinOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import MainPage from "./MainPage";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";

function AppLayout() {
  const [theme, setTheme] = useState("valentine");
  const toggleTheme = () => {
    const newTheme = theme === "valentine" ? "dim" : "valentine";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  useEffect(() => {
    setTheme("valentine");
    document.documentElement.setAttribute("data-theme", theme);
  }, []);
  return (
    <>
    <MouseTrail strokeColor={theme === "valentine" ? "#22223b" : "#f0f0f0"} />
    <div className="flex flex-col h-screen w-screen overflow-auto">
      <header className="flex items-start justify-start p-4 bg-neutral text-neutral-content sticky top-0 z-50">
        <div className="flex items-center space-x-1.5">
          <img src="/tsuchinokobg.png" alt="Tsuchinoko Logo" className="h-10 w-10 rounded-full" />
          <h1 className="text-xl font-bold">NexWan</h1>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <button onClick={toggleTheme} className="btn btn-circle">
            {theme === "light" ? <MoonOutlined /> : <BulbOutlined />}
          </button>
        </div>
      </header>
      <main className="flex-1 p-4">
        <MouseTrail strokeColor="#f0f0f0" />
        <Outlet />
      </main>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 flex justify-around items-center">
        <nav className="">
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover"><MailOutlined/> <span>Email</span></a>
          <a className="link link-hover"><TwitterOutlined /> Twitter</a>
          <a className="link link-hover"><GithubOutlined/> GitHub</a>
          <a className="link link-hover"><DiscordOutlined/> Discord</a>
          <a className="link link-hover"><LinkedinOutlined/> LinkedIn</a>
        </nav>
        <div className="divider divider-horizontal"></div>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <div className="divider divider-horizontal"></div>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
    </>
  );
}

export default AppLayout;
