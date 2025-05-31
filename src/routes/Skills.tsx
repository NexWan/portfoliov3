import { useState } from "react";
import FadeInOnScroll from "../components/FadeInOnScroll";
import { useThemeStore } from "../stores/themeStore";
function Skills() {
  const techs = [
    {
      name: "JavaScript",
      icon: `<i class="devicon-javascript-plain colored"></i>`,
      category: "Languages",
    },
    {
      name: "TypeScript",
      icon: `<i class="devicon-typescript-plain colored"></i>`,
      category: "Languages",
    },
    {
      name: "Python",
      icon: `<i class="devicon-python-plain colored"></i>`,
      category: "Languages",
    },
    {
      name: "Java",
      icon: `<i class="devicon-java-plain colored"></i>`,
      category: "Languages",
    },
    {
      name: "C#",
      icon: `<i class="devicon-csharp-plain colored"></i>`,
      category: "Languages",
    },
    {
      name: "PHP",
      icon: `<i class="devicon-php-plain colored"></i>`,
      category: "Languages",
    },
    {
      name: "HTML",
      icon: `<i class="devicon-html5-plain colored"></i>`,
      category: "Languages",
    },
    {
      name: "CSS",
      icon: `<i class="devicon-css3-plain colored"></i>`,
      category: "Languages",
    },
    {
      name: "Zig",
      icon: `<i class="devicon-zig-plain colored"></i>`,
      category: "Languages",
    },
    {
      name: "Rust",
      icon: {
        white: `<i class="devicon-rust-plain"></i>`,
        colored: `<i class="devicon-rust-plain colored"></i>`,
      },
      category: "Languages",
    },
    {
      name: "C++",
      icon: `<i class="devicon-cplusplus-plain colored"></i>`,
      category: "Languages",
    },
    {
      name: "SQL",
      icon: `<i class="devicon-postgresql-plain colored"></i>`,
      category: "Languages",
    },
    {
      name: "Node.js",
      icon: `<i class="devicon-nodejs-plain colored"></i>`,
      category: "Frameworks",
    },
    {
      name: "BunJS",
      icon: {
        white: `<i class="devicon-bun-plain"></i>`,
        colored: `<i class="devicon-bun-plain colored"></i>`,
      },
      category: "Frameworks",
    },
    {
      name: "React",
      icon: `<i class="devicon-react-original colored"></i>`,
      category: "Frameworks",
    },
    {
      name: "Express.js",
      icon: `<i class="devicon-express-original colored"></i>`,
      category: "Frameworks",
    },
    {
      name: "Flask",
      icon: `<i class="devicon-flask-original colored"></i>`,
      category: "Frameworks",
    },
    {
      name: ".NET Core",
      icon: `<i class="devicon-dotnetcore-plain colored"></i>`,
      category: "Frameworks",
    },
    {
      name: "Tailwind CSS",
      icon: `<i class="devicon-tailwindcss-plain colored"></i>`,
      category: "Frameworks",
    },
    {
      name: "Angular",
      icon: `<i class="devicon-angularjs-plain colored"></i>`,
      category: "Frameworks",
    },
    {
      name: "Vue.js",
      icon: `<i class="devicon-vuejs-plain colored"></i>`,
      category: "Frameworks",
    },
    {
      name: "Docker",
      icon: `<i class="devicon-docker-plain colored"></i>`,
      category: "Tools",
    },
    {
      name: "Git",
      icon: `<i class="devicon-git-plain colored"></i>`,
      category: "Tools",
    },
    {
      name: "Postman",
      icon: `<i class="devicon-postman-plain colored"></i>`,
      category: "Tools",
    },
    {
      name: "Figma",
      icon: `<i class="devicon-figma-plain colored"></i>`,
      category: "Tools",
    },
    {
      name: "Unity",
      icon: `<i class="devicon-unity-plain colored"></i>`,
      category: "Tools",
    },
    {
      name: "Oracle Cloud",
      icon: `<i class="devicon-oracle-original colored"></i>`,
      category: "Cloud",
    },
    {
      name: "Google Cloud",
      icon: `<i class="devicon-googlecloud-plain colored"></i>`,
      category: "Cloud",
    },
    {
      name: "Azure",
      icon: `<i class="devicon-azure-plain colored"></i>`,
      category: "Cloud",
    },
    {
      name: "Cloudflare",
      icon: `<i class="devicon-cloudflare-plain colored"></i>`,
      category: "Cloud",
    },
  ];
  const theme = useThemeStore((state) => state.theme);
  const [selectedCategory, setCategory] = useState("All");
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-6xl 2xl:max-w-7xl px-4 pt-4 m-0">
      <h1 className="text-4xl font-bold mb-4 self-start text-primary 2xl:text-5xl">
        Skills
      </h1>
      <p className="text-lg text-base-content 2xl:text-xl 3xl:!text-2xl">
        During my period as an student and my short period as a developer, I
        have learned a lot of technologies and programming languages. I'd
        consider myself a full-stack developer, but I have more experience in
        the backend than in the frontend (and I think it can be seen in my
        projects). But I am always willing to learn new things and improve my
        skills, even if I don't have much experience with them yet. (Note: My
        skills vary depending on the project and my knowledge, so I may not be
        proficient in all of them, but I am always eager to learn and improve.)
      </p>
      <div className="bg-secondary flex flex-col items-center justify-center w-screen mt-8">
        <div className="flex flex-col items-center justify-center p-4 max-w-6xl 2xl:max-w-7xl">
          <div className="tabs space-x-2">
            {["All", "Languages", "Frameworks", "Tools", "Cloud"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setCategory(category)}
                  className={`tab tab-bordered tab-active text-secondary-content 2xl:text-xl ${
                    selectedCategory === category
                      ? "tab-active bg-primary text-primary-content rounded-xl"
                      : "bg-secondary text-secondary-content "
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
            {techs
              .filter(
                (tech) =>
                  selectedCategory === "All" ||
                  tech.category === selectedCategory
              )
              .map((tech, index) => {
                let iconHtml = tech.icon;
                if (typeof tech.icon === "object") {
                  iconHtml = theme === "dark" ? tech.icon.colored : tech.icon.white;
                }
                return (
                  <FadeInOnScroll
                    key={`${tech.name} - ${selectedCategory}`}
                    delay={index * 0.05}
                  >
                    <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform hover:cursor-pointer hover:shadow-2xl">
                      <div className="card-body flex flex-col items-center w-40">
                        <div
                          className="text-5xl mb-2"
                          dangerouslySetInnerHTML={{ __html: iconHtml }}
                        ></div>
                        <h2 className="card-title">{tech.name}</h2>
                        <p className="text-sm text-base-content">
                          {tech.category}
                        </p>
                      </div>
                    </div>
                  </FadeInOnScroll>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
