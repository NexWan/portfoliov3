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
  const showMore = useRef<HTMLButtonElement>(null);

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
    const is3xl = window.innerWidth >= 2560;

    // Calculate distance based on screen size
    const { left } = block.current!.getBoundingClientRect();
    let targetPosition;

    if (is3xl) {
      // For 2xl screens, calculate distance to justify-end position
      const containerWidth = container.current!.offsetWidth;
      targetPosition =
        containerWidth - Math.abs(block.current!.offsetWidth) - margin - left;
      console.log(
        `Container Width: ${containerWidth}, Block Width: ${
          block.current!.offsetWidth
        }, Margin: ${margin}, Target Position: ${targetPosition}`
      );
    } else {
      // For smaller screens, calculate distance to justify-start position
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
      .from(
        showMore.current,
        { opacity: 0, y:45}, "<0.1"
      );

    return () => {
      tl.kill();
    };
  }, []);

  /* ------------- markup ------------------- */
  return (
    <div className="flex lg:flex-row flex-col overflow-hidden w-full h-full  justify-between scroll-smooth">
      <ParticlesComp />
      <div
        ref={container}
        className="lg:w-1/2 h-screen flex items-center justify-center overflow-hidden bg-content relative"
      >
        <div
          ref={block}
          className="flex flex-col items-start z-10 2xl:justify-end"
        >
          <h1
            ref={headline}
            className="lg:text-6xl text-5xl font-extrabold 3xl:!text-10xl 2xl:text-9xl "
          >
            <span className="text-primary">NexWan</span>
          </h1>
          <h2 ref={subline} className="lg:text-2xl mt-2 2xl:text-4xl 3xl:!text-5xl">
            <TextTransition
              springConfig={presets.wobbly}
              className=""
              direction="up"
              inline
            >
              {TITLES[index % TITLES.length]}
            </TextTransition>
            {index % TITLES.length !== 0 ? (
              <span className="text-primary font-bold 2xl:text-4xl 3xl:!text-5xl"> Dev</span>
            ) : null}
          </h2>
          <button className="lg:hidden btn btn-primary mt-2" ref={showMore}>
            <a href="#about" className="text-primary-content">
              Learn more
            </a>
          </button>
        </div>
      </div>
      <div
        ref={secondDiv}
        id="about"
        className="flex flex-col items-center text-base-content justify-center bg-base-200 relative z-20 p-10 m-0 lg:max-w-1/2 h-screen"
      >
        <p className="lg:text-3xl text-primary font-semibold 2xl:text-5xl 3xl:!text-6xl">
          Welcome to my portfolio!
        </p>
        <motion.img
          src={
            theme === "valentine" ? "tsuchinokobg.png" : "tsuchinoko_dark.png"
          }
          key={theme}
          alt="Tsuchinoko Logo"
          className="lg:h-24 lg:w-24 mt-4 3xl:!h-32 3xl:!w-32 w-16 h-16"
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
        <p className="lg:text-lg text-sm mt-2 2xl:text-2xl 2xl:max-w-6xl 3xl:!text-3xl">
          <span className="text-primary font-bold">Hello!</span> 👋
          my name is{" "}
          <span className="text-primary text-balance font-bold 2xl:text-2xl 3xl:!text-3xl">
            Leo
          </span>
          , and I'm currently a student at the Instituto Tecnologico de
          Saltillo. I'm passionate about everything related to technology,
          especially in the field of software development. I got into
          programming at a young age, and since then, I've been fascinated by
          the world of code and its endless possibilities. <br></br>
          One of my favorite movies is{" "}
          <span className="text-primary font-bold 2xl:text-2xl 3xl:!text-3xl">The social network</span>, it
          inspired me to pursue a career in technology and software development.
        </p>
        <p className="lg:text-lg text-sm mt-2 2xl:text-2xl 2xl:max-w-6xl 3xl:!text-3xl">
          In this portfolio, you'll find some of my projects and works that I've
          done throughout my career. I hope you enjoy exploring them as much as
          I enjoyed creating them!
        </p>
        <p className="text-sm mt-4 text-base-content 2xl:text-lg 2xl:max-w-6xl 3xl:!text-xl">
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
