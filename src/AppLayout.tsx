import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import FooterComponent from "./components/FooterComponent";

function AppLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col" style={{ background: "var(--bg)" }}>
      <Navbar />
      <main className="flex w-full flex-1 flex-col">
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
}

export default AppLayout;
