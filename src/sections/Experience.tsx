import { useState } from "react";
import FadeInOnScroll from "../components/FadeInOnScroll";
import { jobs } from "../data/experience";
import { contests } from "../data/contests";

type Tab = "work" | "contests";

export default function Experience() {
  const [tab, setTab] = useState<Tab>("work");

  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <FadeInOnScroll>
          <span className="section-label">Background</span>
          <h2 className="section-heading">Experience</h2>
          <p className="section-sub">
            Software Engineer focused on backend systems, infrastructure, and data pipelines.
            I build and maintain production systems, with a strong interest in AI-assisted and agentic development.
          </p>
        </FadeInOnScroll>

        <div className="flex gap-2 mb-12">
          <button
            className={`exp-tab${tab === "work" ? " active" : ""}`}
            onClick={() => setTab("work")}
          >
            💼 Work
          </button>
          <button
            className={`exp-tab${tab === "contests" ? " active" : ""}`}
            onClick={() => setTab("contests")}
          >
            🏆 Contests
          </button>
        </div>

        {tab === "work" && (
          <div className="timeline-new">
            {jobs.map((job, i) => (
              <FadeInOnScroll key={job.company} delay={i * 0.08}>
                <div className="timeline-item-new mb-4">
                  <div
                    className={`timeline-dot-new${job.current ? " current" : ""}`}
                  />
                  <p className="timeline-date">{job.duration}</p>
                  <p className="timeline-company">{job.company}</p>
                  <h3 className="timeline-position">{job.position}</h3>
                  <p className="timeline-desc">{job.description}</p>
                  <ul className="timeline-highlights">
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {job.techs.map((t) => (
                      <span key={t} className="tag-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        )}

        {tab === "contests" && (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {contests.map((c, i) => (
              <FadeInOnScroll key={c.name} delay={i * 0.07}>
                <div className="contest-card-new">
                  <div className="contest-icon">{c.award ?? "🏅"}</div>
                  <h3 className="contest-name">{c.name}</h3>
                  <p className="contest-date">{c.date}</p>
                  <p className="contest-desc">{c.description}</p>
                  <span
                    className={`tag-pill tag-place${
                      c.position === "1st Place" ? "" : " na"
                    }`}
                  >
                    {c.position === "1st Place"
                      ? `${c.award ?? "🥇"} 1st Place`
                      : c.position}
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {c.techs.map((t) => (
                      <span key={t} className="tag-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
