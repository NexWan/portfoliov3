export interface Job {
    company: string;
    position: string;
    duration: string;
    description: string;
    image: string;
    techs: string[];
    current?: boolean;
}

export const jobs: Job[] = [
    {
        "company": "Justia",
        "position": "Associate Software Engineer",
        "duration": "June 2025 - Present",
        "description": "Developing and maintaining multiple software solutions, focused on backend and infrastructure development.",
        "image": "https://images.squarespace-cdn.com/content/v1/5c1221fa7106993ecd8a3344/1547463896893-2ME2S6ZDJTC23L7K4BFR/justia+logo-min.png?format=1000w",
        "techs": [
            "Python",
            "PHP",
            "Laravel",
            "Docker",
            "MySQL",
            "AWS",
            "Linux"
        ],
        "current": true
    },
    {
        "company": "Softtek",
        "position": "Automation Engineer Intern",
        "duration": "December 2024 - May 2025",
        "description": "Automating processes and improving efficiency in software development.",
        "image": "https://images.seeklogo.com/logo-png/12/2/softtek-logo-png_seeklogo-128916.png",
        "techs": [
            "Python",
            "Selenium",
            "CI/CD",
            "Power Apps",
            "Power Automate",
            "Web Technologies",
            "Azure"
        ]
    },
    {
        "company": "ZF Group Saltillo",
        "position": "Software Engineer Intern",
        "duration": "August 2024 - December 2024",
        "description": "Developing software solutions for automotive systems and collaborating with cross-functional teams.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/ZF_logo_STD_Blue_3CC.svg/2048px-ZF_logo_STD_Blue_3CC.svg.png",
        "techs": [
            "Power Apps",
            "Power Automate",
            "Dataverse",
            "Python"
        ]
    }
]