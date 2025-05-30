import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Experience() {
  useEffect(() => {
    AOS.init({ duration: 800});
  }, []);

  const internships = [
    {
      company: "Softtek",
      position: "Automation Engineer Intern",
      duration: "December 2024 - Present",
      description:
        "Working on automating processes and improving efficiency in software development.",
      image:
        "https://images.seeklogo.com/logo-png/12/2/softtek-logo-png_seeklogo-128916.png",
      techs: ["Python", "Selenium", "CI/CD", "Power Apps", "Power Automate", "Web Technologies", "Azure"],
    },
    {
      company: "ZF Group Saltillo",
      position: "Software Engineer Intern",
      duration: "August 2024 - December 2024",
      description:
        "Developing software solutions for automotive systems and collaborating with cross-functional teams.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/ZF_logo_STD_Blue_3CC.svg/2048px-ZF_logo_STD_Blue_3CC.svg.png",
      techs: ["Power Apps", "Power Automate", "Dataverse", "Python"],
    },
  ];
  const contests = [
    {
      name: "Hackatec Regional 2024",
      position: "1st Place",
      date: "March 2024",
      description:
        "Participated in a regional hackathon @ TECNM, winning 1st place with a project focused on education with AI.",
      image:
        "https://www.bahia.tecnm.mx/wp-content/uploads/2024/02/Slider-ITBB.png",
      techs: ["Python", "Sickit Learn", "React Native"],
    },
    {
      name: "Hackathon Nacional 2025",
      position: "N/A",
      date: "November 2025",
      description:"Competed in a national hackathon organized by TECNM, creating a solution for a problem applied by Volvo focused on AI and voice assistant.",
      image: "https://www.bahia.tecnm.mx/wp-content/uploads/2024/02/Slider-ITBB.png",
      techs: ["React Native", "Python", "Google Voice Assistant", "AI Tools"],
    },
    {
      name: "Oracle Cloud Academy Challenge 2024",
      position: "N/A",
      date: "June 2024",
      description:"Participated in a challenge focused on cloud computing solutions using Oracle Cloud technologies.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXhyE3iPnXaAjV_oPl6APtwIbozvg6N5YF0a1HGmdQKpDz55_m6AhHqNNHQWiQ0x3V3yE&usqp=CAU",
      techs: ["Oracle Cloud", "Rust", "IoT"],
    },
    {
      name: "ICPC Locals 2024",
      position: "N/A",
      date: "February 2024",
      description:"Competed in the ICPC locals, solving algorithmic problems under time constraints.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/ICPC_Foundation_logo.svg/2560px-ICPC_Foundation_logo.svg.png",
      techs: ["C++", "Algorithms", "Data Structures"],
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-6xl 2xl:max-w-7xl px-4 pt-4 m-0">
        <h1 className="text-4xl font-bold mb-4 self-start text-primary">Experience</h1>
        <p className="text-lg text-justify">
          Currently my experience is very limited, but I have worked in some
          companies and participated in some contests.
        </p>
      <div className="bg-secondary flex flex-col items-center justify-center w-screen mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-6xl 2xl:max-w-7xl">
          {internships.map((internship, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="card bg-base-100 shadow-xl hover:scale-105 transition-transform hover:cursor-pointer hover:shadow-2xl"
            >
              <figure className="w-full">
                <img
                  src={internship.image}
                  alt={internship.company}
                  className="w-full h-32 object-center object-contain"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{internship.position}</h2>
                <p className="font-semibold text-xl">{internship.company}</p>
                <p className="text-sm text-base-content">
                  {internship.duration}
                </p>
                <p className="text-justify">{internship.description}</p>
                <div className="flex flex-wrap mt-2">
                  {internship.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="badge badge-secondary mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {contests.map((contest, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300 hover:cursor-pointer hover:shadow-2xl"
            >
                <figure className="w-full">
                    <img
                    src={contest.image}
                    alt={contest.name}
                    className="w-full h-32 object-fill"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{contest.name}</h2>
                    <p className="font-semibold text-xl">{contest.position}</p>
                    <p className="text-sm text-base-content">{contest.date}</p>
                    <p className="text-justify">{contest.description}</p>
                    <div className="flex flex-wrap mt-2">
                    {contest.techs.map((tech, techIndex) => (
                        <span
                        key={techIndex}
                        className="badge badge-secondary mr-2 mb-2"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
