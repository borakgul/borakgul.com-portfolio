import { ButtonPrimary, ButtonOutline } from "./Button";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container grid grid-cols-1 sm:grid-cols-2 items-center gap-8">

        {/* Sol: Yazı alanı */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-1.jpeg"
                width={40}
                height={40}
                alt="Bora AKGUL portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              {t("hero.status")}
            </div>
          </div>

          <h2 className="text-[1.65rem] sm:text-[2.1rem] md:text-[2.7rem] font-bold mt-5 mb-6 sm:mb-8 max-w-2xl leading-snug text-center sm:text-left">

            <span className="block opacity-0 animate-fadeSlideUp delay-100 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              {t("hero.headline_1")}
            </span>
            <span className="block opacity-0 animate-fadeSlideUp delay-300 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              {t("hero.headline_2")}
            </span>
            <span className="block opacity-0 animate-fadeSlideUp delay-400 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              {t("hero.headline_3")}
            </span>
            <span className="block opacity-0 animate-fadeSlideUp delay-500 bg-gradient-to-r from-sky-300 to-zinc-400 bg-clip-text text-transparent">
              {t("hero.headline_4")}
            </span>
          </h2>

          <div className="flex flex-wrap justify-center sm:justify-start gap-3">
            <ButtonPrimary
              label={t("hero.download_cv")}
              icon="download"
              href="/CV/Resume_Boraa.pdf"
              target="_blank"
            />
            <ButtonOutline
              href="#about"
              label={t("hero.scroll")}
              icon="arrow_downward"
            />
          </div>
        </div>

        {/* Sağ: Fotoğraf */}
        <div className="flex justify-center sm:justify-end">
          <figure className="w-40 sm:w-52 md:w-60 lg:w-[360px] bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[40px] overflow-hidden">
            <img
              src="/images/pp-Photoroom.png"
              alt="Bora Akgul"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
