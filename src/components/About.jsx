import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const aboutItems = t("about.items", { returnObjects: true });

  return (
    <section id="about" className="pt-8 pb-2 sm:pb-4 lg:pb-6 px-4 sm:px-8 lg:px-16">
      <div className="container">

        <div className="bg-zinc-800/50 p-5 sm:p-7 md:p-12 rounded-2xl reveal-up">
          {/* Mobil için açıklama */}
          <p className="text-zinc-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed lg:hidden">
            {t("about.short")}
          </p>

          {/* lg ve üstü için açıklama */}
          <p className="text-zinc-300 mb-6 sm:mb-8 text-base sm:text-lg md:text-xl max-w-[80ch] leading-relaxed hidden lg:block whitespace-pre-line">
            {t("about.long")}
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center mb-1 sm:mb-2">
                  <span className="text-xl sm:text-2xl md:text-4xl font-semibold">{number}</span>
                  <span className="text-sky-400 font-semibold text-lg sm:text-xl md:text-3xl">+</span>
                </div>
                <p className="text-sm sm:text-base text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.png"
              alt="Logo"
              className="ml-auto w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
