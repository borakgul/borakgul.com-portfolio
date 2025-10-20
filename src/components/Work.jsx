import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const imgPaths = [
  '/images/projects/e-commerce.png',
  '/images/projects/OtoparkingSystem.png',
  '/images/projects/backend-1.png',
  '/images/projects/hause-predict.png',
  '/images/projects/JavaBootGallery.png',
  '/images/projects/security-robot.png'
];

const links = [
  'https://github.com/borakgul/ShopWP-MicroS',
  'https://github.com/borakgul/OtoparkSystem',
  'https://github.com/borakgul/node-express-mongo',
  'https://github.com/borakgul/HousePriceKaggle',
  'https://github.com/borakgul/JavaBootGalery',
  'https://borakgul.com/projects'
];

const Work = () => {
  const { t } = useTranslation();
  const works = t('work.projects', { returnObjects: true });

  return (
    <section id="work" className="py-10 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto">

        {/* Başlık ve Buton */}
        <div className="mb-6 sm:mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6">
          <h2 className="text-white text-2xl sm:text-3xl font-bold">
            {t("work.title")}
          </h2>
          <Link
            to="/projects"
            className="inline-block bg-gradient-to-r from-zinc-800 via-rose-900 to-zinc-900 hover:brightness-110 text-white text-sm sm:text-base font-semibold px-6 py-2.5 rounded-lg shadow-md transition-all duration-300"
          >
            {t("work.button")}
          </Link>
        </div>

        {/* Projeler */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 justify-items-center">
          {works.map(({ title, tags }, index) => (
            <div key={index} className="w-full max-w-[420px] mx-auto">
              <ProjectCard
                imgSrc={imgPaths[index]}
                title={title}
                tags={tags}
                projectLink={links[index]}
                classes="reveal-up"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
