import SkillCard from "./SkillCard";
import { useTranslation } from "react-i18next";

const skillItem = [
  {
    imgSrc: "/images/python.svg",
    label: 'Python',
    desc: 'ML/AI & Scripting'
  },
  {
    imgSrc: '/images/java.svg',
    label: 'Java Spring Boot',
    desc: 'Database'
  },
  {
    imgSrc: '/images/kubernetes.svg',
    label: 'Kubernetes',
    desc: 'Container Orchestration'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Spring Boot & REST API'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/ai-svgrepo-com.svg',
    label: 'ML & AI',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/images/networking-connector-svgrepo-com.svg',
    label: 'Cloud & Networking',
    desc: 'AWS - GCP - HUAWEI'
  },
  {
    imgSrc: '/images/mssql.svg',
    label: 'SQL & MongoDB',
    desc: 'Relational Database'
  },
];

const Skill = () => {
  const { t } = useTranslation();

  return (
    <section className="section py-10 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto">
        <h2 className="headline-2 text-xl sm:text-2xl md:text-3xl font-bold mb-2 mt-4 sm:mt-6 lg:mt-8">
          {t("skill.title")}
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base mt-2 mb-8 max-w-[60ch] leading-relaxed">
          {t("skill.description")}
        </p>

        <div className="grid gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
