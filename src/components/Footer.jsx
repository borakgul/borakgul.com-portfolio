import { ButtonPrimary } from "./Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const sitemap = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.projects"), href: "/projects" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.work"), href: "#work" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const socials = [
    { label: "GitHub", href: "https://github.com/borakgul" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/borakgul" },
    { label: "Twitter X", href: "https://x.com/bora_akgul" },
    { label: "Instagram", href: "https://www.instagram.com/borakgul" },
  ];

  const handleScroll = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-zinc-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Sol alan */}
          <div>
            <h2 className="text-2xl font-bold mb-4">{t("footer.headline")}</h2>
            <ButtonPrimary
              href="mailto:borakgul1@gmail.com?subject=Project%20Inquiry&body=Hi%20Bora,%20I%20have%20a%20project%20in%20mind..."
              label={t("footer.button")}
              icon="chevron_right"
            />
          </div>

          {/* Sağ alan */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="font-semibold mb-2">{t("footer.sitemap")}</p>
              <ul>
                {sitemap.map(({ label, href }, key) => {
                  const isAnchor = href.startsWith("#");
                  const id = href.replace("#", "");

                  return (
                    <li key={key}>
                      {isAnchor ? (
                        <button
                          onClick={() => handleScroll(id)}
                          className="block text-sm text-zinc-400 py-1 hover:text-white text-left"
                        >
                          {label}
                        </button>
                      ) : (
                        <a
                          href={href}
                          className="block text-sm text-zinc-400 py-1 hover:text-white"
                        >
                          {label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">{t("footer.socials")}</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-zinc-400 py-1 hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Alt kısım */}
        <div className="flex items-center justify-between border-t border-zinc-700 pt-6">
          <a href="/">
            <img
              src="/images/logo.png"
              width={40}
              height={40}
              alt="Logo"
              className="opacity-80 hover:opacity-100"
            />
          </a>
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} <span className="text-zinc-200">Borakgul</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
