import { useState, useRef, useEffect } from "react";
import FadeInOnScroll from "../components/FadeInOnScroll";
import { projects } from "../data/projects";

const CATEGORIES = ["All", "Web", "Mobile", "Desktop", "Tools", "AI", "Other"];

interface Project {
  title: string;
  description: string;
  link: string;
  Techs: string[];
  status: string;
  category: string[];
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    const t = setTimeout(() => {
      el.style.transition = "opacity 0.4s, transform 0.4s";
      el.style.opacity = "1";
      el.style.transform = "none";
    }, delay);
    return () => clearTimeout(t);
  }, [project, delay]);

  return (
    <div ref={ref} className="project-card-new">
      <h3
        className="font-bold text-lg mb-2"
        style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
      >
        {project.title}
      </h3>
      <p
        className="text-sm mb-4 leading-relaxed"
        style={{ color: "var(--muted)" }}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        <span
          className={`tag-pill ${
            project.status === "Completed" ? "tag-status-done" : "tag-status-wip"
          }`}
        >
          {project.status}
        </span>
        {project.Techs.map((t) => (
          <span key={t} className="tag-pill">
            {t}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
        View on GitHub
      </a>
    </div>
  );
}

export default function Projects() {
  const [cat, setCat] = useState("All");
  const filtered = projects.filter(
    (p) => cat === "All" || p.category.includes(cat)
  );

  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <FadeInOnScroll>
          <span className="section-label">Work</span>
          <h2 className="section-heading">Projects I've built</h2>
          <p className="section-sub">
            I've had the opportunity to work on several personal projects. It's
            something I personally enjoy — it lets me explore new technologies
            and keep improving my stack.
          </p>
        </FadeInOnScroll>

        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`filter-tab${cat === c ? " active" : ""}`}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProjectCard
              key={`${p.title}-${cat}`}
              project={p as Project}
              delay={i * 45}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
