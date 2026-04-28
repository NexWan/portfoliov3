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

  /* ── GSAP entrance ── */
  useLayoutEffect(() => {
    const em = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const margin = em * 2;
    const is3xl = window.innerWidth >= 2560;

    const { left } = block.current!.getBoundingClientRect();
    let targetPosition;

    if (is3xl) {
      const containerWidth = container.current!.offsetWidth;
      targetPosition =
        containerWidth - Math.abs(block.current!.offsetWidth) - margin - left;
    } else {
      targetPosition = margin;
    }

    const distance = is3xl
      ? 0
      : targetPosition -
        (left - container.current!.getBoundingClientRect().left);

    const tl = gsap.timeline({ defaults: { duration: 0.8 } });

    tl.from(headline.current, { opacity: 0, yPercent: -50 })
      .to(block.current, { x: distance, ease: "power2.inOut" })
      .add(() => {
        container.current!.classList.remove("justify-center");
        container.current!.classList.add(
          "justify-start",
          "3xl:!justify-center"
        );
        gsap.set(block.current, {
          clearProps: "transform",
          marginLeft: !is3xl ? `${margin}px` : "0px",
        });
      })
      .to(block.current, { y: -20, ease: "bounce.out" })
      .from(subline.current, { opacity: 0, y: 20 }, "<0.2")
      .from(secondDiv.current, { opacity: 0 }, "<0.1")
      .from(showMore.current, { opacity: 0, y: 45 }, "<0.1");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full grid lg:grid-cols-2 grid-cols-1 min-h-screen overflow-hidden"
    >
      <ParticlesComp />

      {/* ── LEFT: name + subtitle ─────────────────────────────────── */}
      <div
        ref={container}
        className="relative flex items-center justify-center overflow-hidden lg:px-20 px-8 py-20 lg:py-0 lg:min-h-screen"
        style={{ background: "var(--bg)" }}
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

        <div ref={block} className="relative z-10 flex flex-col items-start">
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
            onClick={() => scrollTo("projects")}
          >
            See my work
            <svg
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
        ref={secondDiv}
        className="relative flex flex-col items-center justify-center px-8 lg:px-20 py-20 lg:py-0 overflow-hidden"
        style={{
          background: "var(--bg2)",
          borderLeft: "1px solid var(--border)",
        }}
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

        <div className="relative z-10 max-w-md w-full flex flex-col items-center text-center lg:text-left lg:items-start">
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
            className="text-2xl lg:text-3xl 2xl:text-4xl font-bold mb-5"
            style={{ color: "var(--pk)" }}
          >
            Welcome to my portfolio!
          </h3>

          <p className="text-sm lg:text-base mb-3 leading-relaxed" style={{ color: "var(--muted)" }}>
            <span style={{ color: "var(--text)", fontWeight: 700 }}>Hello! 👋 My name is Leo</span>,
            and I'm currently a student at the Instituto Tecnológico de Saltillo. I'm passionate
            about everything related to technology, especially software development. I got into
            programming at a young age and have been fascinated by the world of code ever since.
          </p>

          <p className="text-sm lg:text-base mb-3 leading-relaxed" style={{ color: "var(--muted)" }}>
            One of my favorite movies is{" "}
            <strong style={{ color: "var(--pk)" }}>The Social Network</strong> — it inspired me
            to pursue a career in technology.
          </p>

          <p className="text-sm lg:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            In this portfolio you'll find my projects and works. I hope you enjoy exploring them
            as much as I enjoyed creating them! Navigate using the links above, or{" "}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("projects");
              }}
              style={{ color: "var(--pk)", textDecoration: "none", fontWeight: 600 }}
            >
              jump straight to my projects →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
