export interface Job {
    company: string;
    position: string;
    duration: string;
    description: string;
    highlights: string[];
    image: string;
    techs: string[];
    current?: boolean;
}

export const jobs: Job[] = [
    {
        "company": "Justia",
        "position": "Associate Software Engineer",
        "duration": "June 2025 - Present",
        "description": "Working on backend systems and large-scale data pipelines for legal web platforms, with a focus on scraping, data processing, and infrastructure reliability.",
        "highlights": [
            "Designing and maintaining web scraping pipelines with Python and Scrapy",
            "Handling data processing and storage workflows across production systems",
            "Working with Docker-based environments and AWS services",
            "Supporting migration and modernization of legacy PHP systems",
            "Debugging incidents and proposing improvements for reliability and data consistency"
        ],
        "image": "https://images.squarespace-cdn.com/content/v1/5c1221fa7106993ecd8a3344/1547463896893-2ME2S6ZDJTC23L7K4BFR/justia+logo-min.png?format=1000w",
        "techs": [
            "Python",
            "Scrapy",
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
        "description": "Focused on process automation and internal tooling to improve development workflows and operational efficiency.",
        "highlights": [
            "Built and maintained automation solutions with Selenium",
            "Worked with CI/CD pipelines for deployment workflows",
            "Created internal tools with Power Apps and Power Automate",
            "Collaborated with teams to identify repetitive processes and turn them into automated solutions"
        ],
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
        "description": "Developed internal tools and automation workflows for automotive-related systems within an enterprise environment.",
        "highlights": [
            "Built Power Apps for process tracking and data management",
            "Automated workflows across departments with Power Automate",
            "Integrated business data using Dataverse",
            "Built applications for touring experiences with HoloLens 2",
            "Collaborated with cross-functional teams across business and technical areas"
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/ZF_logo_STD_Blue_3CC.svg/2048px-ZF_logo_STD_Blue_3CC.svg.png",
        "techs": [
            "Power Apps",
            "Power Automate",
            "Dataverse",
            "HoloLens 2",
            "Python"
        ]
    }
]
