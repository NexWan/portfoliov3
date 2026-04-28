import ProjectBadge from "../components/ProjectBadge";
import { useState } from "react";
import { GithubOutlined } from "@ant-design/icons";
import { useThemeStore } from "../stores/themeStore";
import FadeInOnScroll from "../components/FadeInOnScroll";
import { projects } from "../data/projects";

function Projects() {
 

  const [selectedCategory, setSelectedCategory] = useState("All");
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className="flex w-full flex-col items-center justify-center pt-4 m-0">
      <div className="w-full max-w-6xl 2xl:max-w-7xl lg:px-4">
        <h1 className="lg:text-4xl text-2xl mx-2 lg:mx-2 text-primary font-bold lg:mb-4 self-start 2xl:text-5xl " id="projects-title">
          Projects
        </h1>
        <p className="lg:text-lg text-sm m-4 lg:m-0 2xl:text-xl 3xl:!text-2xl">
          I've had the opportunity to work on several personal projects! Is
          something I personally enjoy doing, as it allows me to explore new
          technologies and keep improving my skills and tech stack.
        </p>
      </div>
      <div className="mt-8 w-full bg-secondary" id="projects-section">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto p-4 flex flex-col items-center justify-center">
          <div className="tabs lg:static sticky top-16 lg:shadow-none rounded-xl shadow-2xl p-2 z-10 bg-secondary w-full justify-center ">
            {[
              "All",
              "Web",
              "Mobile",
              "Desktop",
              "Tools",
              "AI",
              "Other",
            ].map((category) => (
              <button
                key={category}
                className={`tab tab-bordered tabs-border tab-active text-secondary-content 2xl:text-xl 3xl:!text-2xl ${
                  selectedCategory === category
                    ? "tab-active bg-primary text-primary-content rounded-xl"
                    : "bg-secondary text-secondary-content "
                }`}
                onClick={() => {
                  setSelectedCategory(category);
                  window.scrollTo({
                    top: document.getElementById("projects-title")?.offsetTop || 0,
                    behavior: "smooth",
                  });
                }}
              >
                {category}
              </button>
            ))}
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 pb-24 "
            id="projects-list"
          >
            {projects
              .filter(
                (project) =>
                  selectedCategory === "All" ||
                  project.category.includes(selectedCategory)
              )
              .map((project, index) => (
                <FadeInOnScroll
                  key={`${project.title} - ${selectedCategory}`}
                  delay={index * 0.05}
                >
                  <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300 hover:cursor-pointer hover:shadow-2xl">
                    <figure className="w-full">
                      <ProjectBadge
                        title={project.title}
                        techs={project.Techs}
                        tsuchinoko={
                          theme === "dracula"
                            ? "tsuchinoko_dark.png"
                            : "tsuchinokobg.png"
                        }
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title 2xl:text-2xl">
                        {project.title}
                      </h2>
                      <p className="2xl:lg:text-lg 3xl:!text-xl">
                        {project.description}
                      </p>
                      <div className="card-actions justify-center">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm lg:btn-md btn-primary 2xl:btn-lg"
                        >
                          <GithubOutlined className="mr-2" />
                          View Project
                        </a>
                      </div>
                      <div className="mt-2">
                        <span
                          className={`badge badge-sm lg:badge-md 2xl:badge-lg ${
                            project.status == "Completed"
                              ? "badge-success"
                              : "badge-warning"
                          }`}
                        >
                          {project.status}
                        </span>
                        {project.Techs.map((tech) => (
                          <span
                            key={tech}
                            className="badge badge-sm lg:badge-md badge-primary ml-1 my-1 2xl:badge-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeInOnScroll>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
