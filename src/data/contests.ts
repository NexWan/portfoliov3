export interface Contest {
  name: string;
  position: string;
  date: string;
  description: string;
  techs: string[];
  award?: string;
}

export const contests: Contest[] = [
  {
    name: "Hackatec Regional 2024",
    position: "1st Place",
    date: "March 2024",
    description:
      "Won 1st place at a regional hackathon @ TECNM with a project focused on education with AI.",
    techs: ["Python", "Scikit Learn", "React Native"],
    award: "🥇",
  },
  {
    name: "Hackathon Nacional 2025",
    position: "Participant",
    date: "November 2025",
    description:
      "Competed nationally @ TECNM, creating an AI voice assistant solution applied to Volvo's logistics.",
    techs: ["React Native", "Python", "Google Voice Assistant", "AI Tools"],
  },
  {
    name: "Oracle Cloud Academy Challenge 2024",
    position: "Participant",
    date: "June 2024",
    description:
      "Participated in a challenge focused on cloud computing solutions using Oracle Cloud technologies.",
    techs: ["Oracle Cloud", "Rust", "IoT"],
  },
  {
    name: "ICPC Locals 2024",
    position: "Participant",
    date: "February 2024",
    description:
      "Competed in the ICPC locals, solving algorithmic problems under time constraints.",
    techs: ["C++", "Algorithms", "Data Structures"],
  },
];
