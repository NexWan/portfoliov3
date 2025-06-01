import ProjectBadge from "../components/ProjectBadge";
import { useState } from "react";
import { GithubOutlined } from "@ant-design/icons";
import { useThemeStore } from "../stores/themeStore";
import FadeInOnScroll from "../components/FadeInOnScroll";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my projects and skills.",
      link: "https://github.com/NexWan/portfoliov3",

      Techs: ["TypeScript", "React", "Tailwind CSS", "DaisyUI", "Vite"],
      status: "In Development",
      category: ["Web"],
    },
    {
      title: "Marketplace Website",
      description:
        "A marketplace type website made for a school project. It uses Machine Learning to predict the tag of the products based on the image.",
      link: "https://github.com/NexWan/Marketplace-Front",

      Techs: ["TypeScript", "React", "Tailwind CSS", "Vite"],
      status: "Completed",
      category: ["Web", "AI"],
    },
    {
      title: "Marketplace Backend",
      description:
        "The backend for the marketplace website, built with Python, FastAPI and AI Tools.",
      link: "https://github.com/NexWan/Marketplace-Back",

      Techs: ["Python", "FastAPI", "AI Tools"],
      status: "Completed",
      category: ["Web", "AI", "Tools"],
    },
    {
      title: "School Chapter Website",
      description:
        "A website for a school chapter, built with React and Node.js.",
      link: "https://github.com/CapituloSistemasITS/capitulo-sistemas-its",
      Techs: ["TypeScript", "React", "Node.js"],
      status: "Completed",
      category: ["Web"],
    },
    {
      title: "PostgreSQL Zig Wrapper",
      description:
        "A wrapper for PostgreSQL written in Zig, providing a simple interface for database operations.",
      link: "https://github.com/NexWan/zig-postgresql-wrapper",
      Techs: ["Zig", "C"],
      status: "In Development",
      category: ["Tools"],
    },
    {
      title: "Zig Static Server",
      description:
        "A static file server written in Zig, designed for high performance and low resource usage.",
      link: "lhttps://github.com/NexWan/Zig-server-handler",
      Techs: ["Zig"],
      status: "In Development",
      category: ["Tools"],
    },
    {
      title: "Birth Certificate Manager",
      description:
        "A desktop application for managing birth certificates, built with C#, .NET and WPF.",
      link: "https://github.com/NexWan/ProyectoAdminBD",
      Techs: ["C#", ".NET", "WPF"],
      status: "Completed",
      category: ["Desktop"],
    },
    {
      title: "SpotiPlaying SVG",
      description:
        "A simple SVG generator for Spotify playing status, built with TypeScript and React.",
      link: "https://github.com/NexWan/SpotiPlaying",
      status: "Completed",
      Techs: ["TypeScript", "React"],
      category: ["Web"],
    },
    {
      title: "MindScrap",
      description:
        "A CLI tool for scraping and creating schedules from mindbox, built with Python.",
      link: "https://github.com/NexWan/MindScrap",
      Techs: ["Python", "CLI", "BeautifulSoup"],
      status: "Completed",
      category: ["Tools"],
    },
    {
      title: "Chase a Rooster",
      description:
        "A simple game made with Unity, where you chase a rooster around maps and catch them.",
      link: "https://github.com/NexWan/Proyecto-Final-Graficacion",
      Techs: ["C#", "Unity"],
      status: "Completed",
      category: ["Game"],
    },
    {
      title: "Manos que hablan",
      description:
        "A mobile application for learning sign language, built with React Native for a Hackaton.",
      link: "https://github.com/NexWan/senias-mobile",
      Techs: ["TypeScript", "React Native"],
      status: "Completed",
      category: ["Mobile"],
    },
    {
      title: "IoT Smart Container",
      description:
        "An IoT project that monitors the status of a container, built with ESP and Oracle Cloud for a Hackaton.",
      link: "https://github.com/NexWan/iot-container",
      Techs: ["Rust", "ESP", "Oracle Cloud"],
      status: "Completed",
      category: ["Other"],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-6xl 2xl:max-w-7xl lg:px-4 pt-4 m-0">
      <h1 className="lg:text-4xl text-2xl mx-2 lg:mx-2 text-primary font-bold lg:mb-4 self-start 2xl:text-5xl " id="projects-title">
        Projects
      </h1>
      <p className="lg:text-lg text-sm m-4 lg:m-0 2xl:text-xl 3xl:!text-2xl">
        I've had the opportunity to work on several personal projects! Is
        something I personally enjoy doing, as it allows me to explore new
        technologies and keep improving my skills and tech stack.
      </p>
      <div className="mt-8 w-screen bg-secondary" id="projects-section">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto p-4 flex flex-col items-center justify-center">
          <div className="tabs lg:static sticky top-16 lg:shadow-none rounded-xl shadow-2xl p-2 z-10 bg-secondary w-full justify-center ">
            {[
              "All",
              "Web",
              "Mobile",
              "Desktop",
              "Game",
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
