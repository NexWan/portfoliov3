import React from "react";
import { useThemeStore } from "../stores/themeStore";

type ProjectBadgeProps = {
  title: string;
  techs: string[];
  tsuchinoko?: string; // URL or local path
};

const techIcons: Record<string, string | { light: string; dark: string }> = {
  TypeScript: "/icons/typescript-icon.svg",
  React: "/icons/react.svg",
  "Tailwind CSS": "/icons/tailwindcss-icon.svg",
  "C#": "/icons/c-sharp.svg",
  Zig: {
    light: "/icons/zig.svg",
    dark: "/icons/zig-white.svg",
  },
  "Node.js": "/icons/nodejs-icon.svg",
  Python: "/icons/python.svg",
  Unity: "/icons/unity.svg",
  "React Native": "/icons/react.svg",
  Vite: "/icons/vitejs.svg",
  Rust: {
    light: "/icons/rust.svg",
    dark: "/icons/rust-white.svg",
  },
  "Oracle Cloud": "/icons/oracle.svg",
  ".NET": "/icons/dotnet.svg",
};

const ProjectBadge: React.FC<ProjectBadgeProps> = ({
  title,
  techs,
  tsuchinoko,
}) => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div
      className={`w-full rounded-lg shadow-lg p-4 flex flex-col items-center bg-base-200`}
    >
      <img
        src={tsuchinoko}
        alt="Tsuchinoko mascot"
        className="w-16 h-16 mb-2"
      />
      <h2 className="text-lg font-bold text-base-content text-center">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center mt-2 gap-2">
        {techs
          .filter((tech) => techIcons[tech])
          .map((tech) => {
            const icon = techIcons[tech];
            const iconSrc =
              typeof icon === "string"
                ? icon
                : theme === "valentine"
                ? icon.light
                : icon.dark;
            return (
              <img
                key={tech}
                src={iconSrc}
                alt={tech}
                title={tech}
                className="w-6 h-6"
              />
            );
          })}
      </div>
    </div>
  );
};

export default ProjectBadge;
