import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { FaGithub } from 'react-icons/fa';
import Contact from '../components/Contact';
import { useTranslation } from 'react-i18next';

const repoLinks = [
  "https://github.com/borakgul/security-robot",
  "https://github.com/borakgul/CarAnomalyDetection",
  "https://github.com/borakgul/OtoparkSystem",
  "https://github.com/borakgul/node-express-mongo",
  "https://github.com/borakgul/",
  "https://github.com/borakgul/ShopWP-MicroS",
  "https://github.com/borakgul/HousePriceKaggle",
  "https://github.com/borakgul/ML-Recommended-System-Design-w-TensorFlow"
];

const imgSources = [
  "/images/projects/security-robot.png",
  "/images/projects/anamoly-detection.png",
  "/images/projects/OtoparkingSystem.png",
  "/images/projects/backend-1.png",
  "/images/projects/flight-simulation.png",
  "/images/projects/e-commerce.png",
  "/images/projects/hause-predict.png",
  "/images/projects/movie-recommend.png"
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true });

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="headline-2 mb-8 text-center text-white text-3xl font-extrabold">
        {t("projects.title")}
      </h2>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl border border-zinc-700 bg-zinc-800 shadow-md overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex flex-col sm:flex-row text-left cursor-pointer"
            >
              <div className="w-full sm:w-72 h-52 p-3">
                <div className="border border-zinc-600 rounded-xl overflow-hidden h-full">
                  <img
                    src={imgSources[index]}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="flex-1 px-4 py-2 sm:py-4 flex flex-col justify-center">
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                <p className="text-sm sm:text-base text-zinc-400 mt-1 italic">{project.summary}</p>
              </div>

              <div className="px-4 pt-2 sm:pt-4 text-zinc-400 self-center sm:self-start">
                {activeIndex === index ? (
                  <ChevronUpIcon className="w-6 h-6 transition-transform duration-300" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6 transition-transform duration-300" />
                )}
              </div>
            </button>

            <div
              className={`px-6 text-sm text-zinc-300 transition-all duration-300 ease-in-out overflow-hidden ${
                activeIndex === index ? 'max-h-[600px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
              }`}
            >
              <p className="mb-4 text-sm sm:text-base leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs sm:text-sm px-3 py-1 rounded-full font-medium shadow-sm bg-zinc-700 text-white border border-zinc-600 hover:bg-sky-700 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={repoLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 px-4 py-2 rounded-md shadow-inner hover:shadow-md transition-all duration-200"
              >
                <FaGithub className="w-5 h-5 opacity-80 group-hover:opacity-100" />
                {t("projects.viewOnGitHub")}
              </a>
            </div>
          </div>
        ))}
      </div>

      <Contact />
    </section>
  );
};

export default Projects;
