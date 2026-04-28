import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FadeInOnScroll from "../components/FadeInOnScroll";
import { jobs } from "../data/experience";

function Experience() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="flex w-full self-stretch flex-col items-center pt-4 m-0">
      <div className="w-full max-w-6xl 2xl:max-w-7xl lg:px-4">
        <h1 className="lg:text-4xl text-2xl mx-4 lg:mx-2 mb-2 font-bold lg:mb-4 self-start text-primary 2xl:text-5xl">
          Experience
        </h1>
        <p className="lg:text-lg text-sm mx-4 lg:mx-2 text-justify 2xl:*text-xl 3xl:!text-2xl">
          Currently my experience is very limited, but I have worked in some
          companies and participated in some contests.
        </p>
      </div>
      <div className="bg-secondary flex flex-1 flex-col items-center w-full mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-6xl 2xl:max-w-7xl">
          {jobs.map((job, index) => (
            <FadeInOnScroll key={index} delay={index * 0.05}>
              <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform hover:cursor-pointer hover:shadow-2xl">
                <figure className="w-full">
                  <img
                    src={job.image}
                    alt={job.company}
                    className="w-full h-32 object-center object-contain"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title 2xl:text-2xl">
                    {job.position}
                  </h2>
                  <p className="font-semibold text-xl 2xl:text-2xl">
                    {job.company}
                  </p>
                  <p className="text-sm text-base-content 2xl:text-md 3xl:!text-lg">
                    {job.duration}
                  </p>
                  <p className="text-justify 2xl:text-lg">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap mt-2">
                    {job.techs.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="badge badge-secondary badge-sm lg: badge-md mr-2 mb-2 2xl:badge-lg"
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
  );
}

export default Experience;
