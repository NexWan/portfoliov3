import { useEffect, useState } from "react";
import { MenuOutlined, GithubOutlined } from "@ant-design/icons";

const SECTIONS: { id: string; label: string }[] = [
  { id: "home",       label: "Home"       },
  { id: "projects",   label: "Projects"   },
  { id: "skills",     label: "Skills"     },
  { id: "experience", label: "Experience" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 120;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= y) {
          setActive(SECTIONS[i].id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function goTo(id: string) {
    setActive(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" });
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 lg:px-10 transition-all duration-300 ${
        scrolled ? "navbar-glass" : ""
      }`}
      style={{ borderBottom: scrolled ? undefined : "1px solid transparent" }}
    >
      {/* Brand */}
      <button
        onClick={() => goTo("home")}
        className="flex items-center gap-2.5 cursor-pointer bg-transparent border-0"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: "1.2rem",
          color: "var(--text)",
        }}
      >
        <img
          src="/tsuchinoko_dark.png"
          alt="NexWan mascot"
          className="h-9 w-9 object-contain rounded-full"
        />
        NexWan
      </button>

      {/* Desktop links */}
      <div className="hidden lg:flex gap-1">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            className={`nav-pill${active === s.id ? " active" : ""}`}
            onClick={() => goTo(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Right: GitHub + mobile menu */}
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/NexWan"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-icon-btn"
          aria-label="GitHub"
        >
          <GithubOutlined />
        </a>

        <button
          className="lg:hidden nav-icon-btn"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Open menu"
        >
          <MenuOutlined />
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="lg:hidden absolute top-16 left-0 right-0 flex flex-col gap-1 p-3 navbar-glass"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              className={`nav-pill text-left${active === s.id ? " active" : ""}`}
              onClick={() => goTo(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
