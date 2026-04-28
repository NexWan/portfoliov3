import { useRef, useLayoutEffect, useEffect, useState } from "react";
import gsap from "gsap";
import TextTransition, { presets } from "react-text-transition";
import { motion } from "framer-motion";
import ParticlesComp from "../components/ParticlesComp";

const TITLES: { prefix: string; showDev: boolean }[] = [
  { prefix: "Software Engineer", showDev: false },
  { prefix: "Front-end",         showDev: true  },
  { prefix: "Back-end",          showDev: true  },
  { prefix: "Full-stack",        showDev: true  },
  { prefix: "Power Platform",    showDev: true  },
];

interface HeroProps {
  scrollTo: (id: string) => void;
}

export default function Hero({ scrollTo }: HeroProps) {
  const container = useRef<HTMLDivElement>(null);
  const block = useRef<HTMLDivElement>(null);
  const headline = useRef<HTMLHeadingElement>(null);
  const subline = useRef<HTMLHeadingElement>(null);
  const secondDiv = useRef<HTMLDivElement>(null);
  const showMore = useRef<HTMLButtonElement>(null);

  /* ── rotating subtitle (library) ── */
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => i + 1), 2500);
    return () => clearInterval(id);
  }, []);
  const current = TITLES[index % TITLES.length];

  const handleHeroCta = () => {
    const isMobile = window.matchMedia("(max-width: 1023px)").matches;
    scrollTo(isMobile ? "about" : "projects");
  };

  /* ── GSAP entrance ── */
  useLayoutEffect(() => {
    const isMobile = window.innerWidth < 1024;
    const is3xl = window.innerWidth >= 2560;
    const containerEl = container.current;
    const blockEl = block.current;
    const headlineEl = headline.current;
    const sublineEl = subline.current;
    const secondDivEl = secondDiv.current;
    const showMoreEl = showMore.current;

    if (!containerEl || !blockEl || !headlineEl || !sublineEl || !secondDivEl || !showMoreEl) {
      return;
    }

    const containerRect = containerEl.getBoundingClientRect();
    const blockRect = blockEl.getBoundingClientRect();
    const centeredLeft = containerRect.left + (containerRect.width - blockRect.width) / 2;
    const centeredOffset = isMobile || is3xl ? 0 : centeredLeft - blockRect.left;

    const tl = gsap.timeline({ defaults: { duration: 0.8 } });

    tl.set(blockEl, { x: centeredOffset })
      .from(headlineEl, { opacity: 0, yPercent: -50 });

    if (isMobile) {
      tl.to(blockEl, { y: -36, ease: "power2.inOut" }).to(
        blockEl,
        { y: -56, ease: "bounce.out" }
      );
    } else {
      tl.to(blockEl, { x: 0, ease: "power2.inOut" });
    }

    tl.from(sublineEl, { opacity: 0, y: 20 }, "<0.2")
      .from(secondDivEl, { opacity: 0 }, "<0.1")
      .from(showMoreEl, { opacity: 0, y: 45 }, "<0.1");

    return () => {
      tl.kill();
      gsap.set([blockEl, headlineEl, sublineEl, secondDivEl, showMoreEl], {
        clearProps: "all",
      });
    };
  }, []);

  return (
    <section
      id="home"
      className="hero-shell relative w-full grid lg:grid-cols-2 grid-cols-1 min-h-screen overflow-hidden"
    >
      <ParticlesComp />

      {/* ── LEFT: name + subtitle ─────────────────────────────────── */}
      <div
        ref={container}
        className="hero-intro relative z-10 flex items-center justify-center lg:justify-start 3xl:!justify-center overflow-hidden lg:px-20 px-8 py-20 lg:py-0"
      >
        {/* blob glows */}
        <div
          className="blob"
          style={{
            width: 500,
            height: 500,
            background: "var(--pu)",
            top: -200,
            left: -200,
          }}
        />
        <div
          className="blob"
          style={{
            width: 300,
            height: 300,
            background: "var(--pk)",
            bottom: -100,
            right: 80,
            opacity: 0.1,
          }}
        />

        {/* floating decorative shapes */}
        <span
          className="float-diamond absolute pointer-events-none"
          style={{ width: 18, height: 18, background: "var(--ye)", top: "18%", left: "12%" }}
        />
        <span
          className="float-diamond absolute pointer-events-none"
          style={{ width: 12, height: 12, background: "var(--ye)", top: "65%", left: "22%", animationDelay: "1s" }}
        />
        <span
          className="float-diamond absolute pointer-events-none"
          style={{ width: 22, height: 22, background: "var(--ye)", bottom: "18%", left: "8%", animationDelay: "0.5s" }}
        />
        <span
          className="float-circle absolute pointer-events-none"
          style={{ width: 14, height: 14, borderRadius: "50%", background: "var(--ye)", bottom: "28%", right: "15%" }}
        />
        <span
          className="float-ring absolute pointer-events-none"
          style={{ width: 28, height: 28, borderRadius: "50%", border: "3px solid var(--pk)", bottom: "55%", right: "8%" }}
        />

        <div ref={block} className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1
            ref={headline}
            className="lg:text-7xl text-5xl font-extrabold 3xl:!text-10xl 2xl:text-9xl tracking-tight"
            style={{ color: "var(--pk)" }}
          >
            NexWan
          </h1>
          <h2
            ref={subline}
            className="lg:text-2xl mt-3 2xl:text-4xl 3xl:!text-5xl flex items-baseline gap-[0.3em]"
            style={{ color: "var(--text)" }}
          >
            <TextTransition
              springConfig={presets.wobbly}
              direction="up"
              inline
              className="font-bold"
              style={{ color: "var(--pk)" }}
            >
              {current.prefix}
            </TextTransition>
            <span
              className="font-normal transition-opacity duration-200"
              style={{ opacity: current.showDev ? 1 : 0 }}
            >
              Dev
            </span>
          </h2>

          <button
            ref={showMore}
            className="hero-cta mt-8"
            onClick={handleHeroCta}
          >
            See my work
            <svg
              className="hero-cta-icon"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── RIGHT: about ──────────────────────────────────────────── */}
      <div
        id="about"
        ref={secondDiv}
        className="hero-about relative z-10 flex flex-col items-center justify-center px-8 lg:px-20 py-20 lg:py-0 overflow-hidden"
      >
        {/* radial blob backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(155,109,255,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(255,110,180,0.08) 0%, transparent 60%)",
          }}
        />

        {/* edge shapes */}
        <span
          className="float-diamond absolute pointer-events-none"
          style={{ width: 14, height: 14, background: "var(--ye)", top: "20%", right: "10%" }}
        />
        <span
          className="float-circle absolute pointer-events-none"
          style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--ye)", bottom: "20%", right: "5%" }}
        />

        <div className="about-glass relative z-10 max-w-md w-full flex flex-col items-center text-center lg:text-left lg:items-start">
          <motion.img
            src="/tsuchinoko_dark.png"
            alt="NexWan mascot"
            className="lg:h-20 lg:w-20 w-16 h-16 mb-3 self-center"
            animate={{
              x: [0, -1, 1, -1, 1, 0],
              y: [0, 1, -1, 1, -1, 0],
              rotate: [0, 1, -1, 1, -1, 0],
            }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          />

          <h3
            className="about-glass-title text-2xl lg:text-3xl 2xl:text-4xl font-bold mb-5"
          >
            Welcome to my portfolio!
          </h3>

          <p className="about-glass-copy text-sm lg:text-base mb-3 leading-relaxed">
            <span>Hello! 👋 My name is Leo</span>,
            and I'm currently a student at the Instituto Tecnológico de Saltillo. I'm passionate
            about everything related to technology, especially software development. I got into
            programming at a young age and have been fascinated by the world of code ever since.
          </p>

          <p className="about-glass-copy text-sm lg:text-base mb-3 leading-relaxed">
            One of my favorite movies is{" "}
            <strong>The Social Network</strong>. It inspired me
            to pursue a career in technology.
          </p>

          <p className="about-glass-copy text-sm lg:text-base leading-relaxed">
            In this portfolio you'll find my projects and works. I hope you enjoy exploring them
            as much as I enjoyed creating them! Navigate using the links above, or{" "}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("projects");
              }}
            >
              jump straight to my projects →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
