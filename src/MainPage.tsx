import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";

export default function MainPage() {
  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" });
  }

  return (
    <>
      <Hero scrollTo={scrollTo} />
      <Projects />
      <Skills />
      <Experience />
    </>
  );
}
