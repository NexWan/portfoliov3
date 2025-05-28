import { useRef, useLayoutEffect, useEffect, useState } from "react";
import gsap from "gsap";
import TextTransition, { presets } from "react-text-transition";

export default function MainPage() {
  const container = useRef<HTMLDivElement>(null); 
  const block     = useRef<HTMLDivElement>(null); 
  const headline  = useRef<HTMLHeadingElement>(null);
  const subline   = useRef<HTMLHeadingElement>(null);

  /* ---------- rotating subtitle ----------- */
  const TITLES = ["Software Engineer ","Front-end ","Back-end ","Full-stack ","Power Platform "];
  const [index, setIndex] = useState(0);
  useEffect(() => { const id = setInterval(() => setIndex(i => i + 1), 2500); return () => clearInterval(id); }, []);

  /* -------------- GSAP -------------------- */
  useLayoutEffect(() => {
    const em   = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const margin = em * 2;                                 
    const { left } = block.current!.getBoundingClientRect();
    const distance = -(left - margin +1);                     

    const tl = gsap.timeline({ defaults: { duration: 0.8 } });

    tl.from(headline.current, { opacity: 0, yPercent: -50 })     
      .to(block.current, { x: distance, ease: "power2.inOut" })
      .add(() => {
        container.current!.classList.replace("justify-center", "justify-start");
        gsap.set(block.current, { clearProps: "transform", marginLeft: margin });
      })
      .to(block.current, { y: -20, ease: "bounce.out" })          // small bounce
      .from(subline.current, { opacity: 0, y: 20 }, "<0.2");      // subtitle
    return () => { tl.kill(); };
  }, []);

  /* ------------- markup ------------------- */
  return (
    <div                      
      ref={container}
      className="w-full h-screen flex items-center justify-center overflow-hidden bg-content"
    >
      <div ref={block} className="flex flex-col items-start">
        <h1 ref={headline} className="text-6xl font-extrabold">
          <span className="text-primary">NexWan</span>
        </h1>
        <h2 ref={subline} className="text-2xl mt-2">
          <TextTransition springConfig={presets.wobbly} direction="up" inline> 
            {TITLES[index % TITLES.length]}
          </TextTransition>
          {index % TITLES.length !== 0 ? <span className="text-primary font-bold"> Dev</span> : null}
        </h2>
      </div>
    </div>
  );
}
