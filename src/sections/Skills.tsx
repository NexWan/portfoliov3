import FadeInOnScroll from "../components/FadeInOnScroll";

type SkillCategory = "Languages" | "Frameworks" | "Tools" | "Cloud";

interface Skill {
  name: string;
  iconClass: string;
  category: SkillCategory;
}

const techs: Skill[] = [
  { name: "JavaScript",   iconClass: "devicon-javascript-plain colored",  category: "Languages"  },
  { name: "TypeScript",   iconClass: "devicon-typescript-plain colored",  category: "Languages"  },
  { name: "Python",       iconClass: "devicon-python-plain colored",      category: "Languages"  },
  { name: "Java",         iconClass: "devicon-java-plain colored",        category: "Languages"  },
  { name: "C#",           iconClass: "devicon-csharp-plain colored",      category: "Languages"  },
  { name: "PHP",          iconClass: "devicon-php-plain colored",         category: "Languages"  },
  { name: "HTML",         iconClass: "devicon-html5-plain colored",       category: "Languages"  },
  { name: "CSS",          iconClass: "devicon-css3-plain colored",        category: "Languages"  },
  { name: "Zig",          iconClass: "devicon-zig-plain colored",         category: "Languages"  },
  { name: "Rust",         iconClass: "devicon-rust-plain colored",        category: "Languages"  },
  { name: "C++",          iconClass: "devicon-cplusplus-plain colored",   category: "Languages"  },
  { name: "SQL",          iconClass: "devicon-postgresql-plain colored",  category: "Languages"  },
  { name: "Node.js",      iconClass: "devicon-nodejs-plain colored",      category: "Frameworks" },
  { name: "BunJS",        iconClass: "devicon-bun-plain colored",         category: "Frameworks" },
  { name: "React",        iconClass: "devicon-react-original colored",    category: "Frameworks" },
  { name: "Express.js",   iconClass: "devicon-express-original",          category: "Frameworks" },
  { name: "Flask",        iconClass: "devicon-flask-original",            category: "Frameworks" },
  { name: ".NET Core",    iconClass: "devicon-dotnetcore-plain colored",  category: "Frameworks" },
  { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-plain colored", category: "Frameworks" },
  { name: "Angular",      iconClass: "devicon-angularjs-plain colored",   category: "Frameworks" },
  { name: "Vue.js",       iconClass: "devicon-vuejs-plain colored",       category: "Frameworks" },
  { name: "Docker",       iconClass: "devicon-docker-plain colored",      category: "Tools"      },
  { name: "Git",          iconClass: "devicon-git-plain colored",         category: "Tools"      },
  { name: "Postman",      iconClass: "devicon-postman-plain colored",     category: "Tools"      },
  { name: "Figma",        iconClass: "devicon-figma-plain colored",       category: "Tools"      },
  { name: "Unity",        iconClass: "devicon-unity-plain colored",       category: "Tools"      },
  { name: "Oracle Cloud", iconClass: "devicon-oracle-original colored",   category: "Cloud"      },
  { name: "Google Cloud", iconClass: "devicon-googlecloud-plain colored", category: "Cloud"      },
  { name: "Azure",        iconClass: "devicon-azure-plain colored",       category: "Cloud"      },
  { name: "Cloudflare",   iconClass: "devicon-cloudflare-plain colored",  category: "Cloud"      },
];

const ROWS: { label: string; cats: SkillCategory[]; direction?: "left" | "right" }[] = [
  { label: "Languages",              cats: ["Languages"]            },
  { label: "Frameworks & Libraries", cats: ["Frameworks"], direction: "right" },
  { label: "Tools & Cloud",          cats: ["Tools", "Cloud"]       },
];

function MarqueeRow({
  skills,
  direction = "left",
}: {
  skills: Skill[];
  direction?: "left" | "right";
}) {
  const items = [...skills, ...skills, ...skills, ...skills];
  const animClass = direction === "right" ? "marquee-right" : "marquee-left";

  return (
    <div className="marquee-wrap">
      <div className={`marquee-track ${animClass}`}>
        {items.map((skill, i) => (
          <div key={i} className="skill-chip">
            <i className={skill.iconClass}></i>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
      style={{ background: "var(--bg2)" }}
    >
      <div className="section-inner">
        <FadeInOnScroll>
          <span className="section-label">Toolkit</span>
          <h2 className="section-heading">My skills</h2>
          <p className="section-sub">
            During my time as a student and developer I've learned a wide range
            of technologies. I consider myself a full-stack developer with more
            depth on the backend side — but always eager to learn and improve.
          </p>
        </FadeInOnScroll>
      </div>

      <div className="flex flex-col gap-7 mt-2">
        {ROWS.map((row) => {
          const rowSkills = techs.filter((t) => row.cats.includes(t.category));
          return (
            <div key={row.label}>
              <div className="section-inner px-6 lg:px-20">
                <p className="skills-row-label">{row.label}</p>
              </div>
              <MarqueeRow skills={rowSkills} direction={row.direction} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
