import { useRef, useLayoutEffect, useEffect, useState } from "react";
import gsap from "gsap";
import TextTransition, { presets } from "react-text-transition";
import ParticlesComp from "./components/ParticlesComp";
import { useThemeStore } from "./stores/themeStore";
import { motion } from "framer-motion";

export default function MainPage() {
  const container = useRef<HTMLDivElement>(null);
  const block = useRef<HTMLDivElement>(null);
  const headline = useRef<HTMLHeadingElement>(null);
  const subline = useRef<HTMLHeadingElement>(null);
  const secondDiv = useRef<HTMLDivElement>(null);

  const theme = useThemeStore((state) => state.theme);
  /* ---------- rotating subtitle ----------- */
  const TITLES = [
    "Software Engineer ",
    "Front-end ",
    "Back-end ",
    "Full-stack ",
    "Power Platform ",
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => i + 1), 2500);
    return () => clearInterval(id);
  }, []);

  /* -------------- GSAP -------------------- */
  useLayoutEffect(() => {
    const em = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const margin = em * 2;
    const { left } = block.current!.getBoundingClientRect();
    const distance = -(left - margin + 1);

    const tl = gsap.timeline({ defaults: { duration: 0.8 } });

    tl.from(headline.current, { opacity: 0, yPercent: -50 })
      .to(block.current, { x: distance, ease: "power2.inOut" })
      .add(() => {
        container.current!.classList.replace("justify-center", "justify-start");
        gsap.set(block.current, {
          clearProps: "transform",
          marginLeft: margin,
        });
      })
      .to(block.current, { y: -20, ease: "bounce.out" }) // small bounce
      .from(subline.current, { opacity: 0, y: 20 }, "<0.2") // subtitle
      .from(secondDiv.current, { opacity: 0 }, "<0.1"); // second div
    return () => {
      tl.kill();
    };
  }, []);

  /* ------------- markup ------------------- */
  return (
    <div className="flex flex-row overflow-hidden w-full h-full">
      <div
        ref={container}
        className="w-1/2 h-screen flex items-center bg-base-100 justify-center overflow-hidden bg-content relative"
      >
        <ParticlesComp />
        <div ref={block} className="flex flex-col items-start z-10 ">
          <h1 ref={headline} className="text-6xl font-extrabold">
            <span className="text-primary">NexWan</span>
          </h1>
          <h2 ref={subline} className="text-2xl mt-2">
            <TextTransition springConfig={presets.wobbly} direction="up" inline>
              {TITLES[index % TITLES.length]}
            </TextTransition>
            {index % TITLES.length !== 0 ? (
              <span className="text-primary font-bold"> Dev</span>
            ) : null}
          </h2>
        </div>
      </div>
      <div
        ref={secondDiv}
        className="flex-1 flex flex-col items-center text-base-content justify-center bg-base-200 p-10 m-0 w-full h-full"
      >
        <p className="text-3xl text-primary font-semibold">
          Welcome to my portfolio!
        </p>
        <motion.img
          src={
            theme === "valentine" ? "tsuchinokobg.png" : "tsuchinoko_dark.png"
          }
          key={theme}
          alt="Tsuchinoko Logo"
          className="h-24 w-24 mt-4"
          animate={{
            x: [0, -1, 1, -1, 1, 0],
            y: [0, 1, -1, 1, -1, 0],
            rotate: [0, 1, -1, 1, -1, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />{" "}
        <p className="text-lg mt-2">
          My name is{" "}
          <span className="text-primary text-balance font-bold">Leo</span>, and
          I'm currently a student at the Instituto Tecnologico de Saltillo. I'm
          passionate about everything related to technology, especially in the
          field of software development. I got into programming at a young age,
          and since then, I've been fascinated by the world of code and its
          endless possibilities. <br></br>
          One of my favorite movies is{" "}
          <span className="text-primary font-bold">The social network</span>, it
          inspired me to pursue a career in technology and software development.
        </p>
        <p className="text-lg mt-2">
          In this portfolio, you'll find some of my projects and works that I've
          done throughout my career. I hope you enjoy exploring them as much as
          I enjoyed creating them!
        </p>
        <p className="text-sm mt-4 text-base-content">
          You can navigate through the site using the links in the header. Or
          you can go directly to my projects by clicking this{" "}
          <a href="/projects" className="text-primary font-bold">
            link
          </a>
          . If you have any questions or want to contact me, you can do so
          through the contact section in the footer.
        </p>
      </div>
    </div>
  );
}
