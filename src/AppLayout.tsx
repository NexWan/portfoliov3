import { Outlet } from "react-router";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import Navbar from "./components/Navbar";
import { useThemeStore } from "./stores/themeStore";
import FooterComponent from "./components/FooterComponent";
function AppLayout() {
  const theme = useThemeStore((state) => state.theme);
  return (
    <>
    <MouseTrail strokeColor={theme === "valentine" ? "#22223b" : "#f0f0f0"} />
    <div className="flex min-h-screen w-full flex-col">
      <header className="flex 2xl:max-h-1/3 items-start justify-start bg-neutral text-neutral-content sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="flex w-full flex-1 justify-center items-start bg-base-100">
        <Outlet/>
      </main>
      <FooterComponent />
    </div>
    </>
  );

 
}

export default AppLayout;
