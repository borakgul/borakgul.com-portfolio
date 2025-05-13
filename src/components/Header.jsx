import { useState } from "react";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">

        {/* Logo: hidden on mobile but space is preserved with w-10 */}
        <div className="w-10 md:w-auto">
          <h1 className="hidden md:block">
            <a href="/" className="logo">
              <img
                src="/images/logo.png"
                width={40}
                height={40}
                alt="Bora Akgul"
              />
            </a>
          </h1>
        </div>

        {/* Navbar & Mobile Menu Button */}
        <div className="relative md:justify-self-center flex items-center gap-3 md:gap-0">
          {/* Mobile Language Switcher */}
          <div className="block lg:hidden">
            <LanguageSwitcher />
          </div>

          {/* Hamburger Menu */}
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>

          <Navbar navOpen={navOpen} />
        </div>

        {/* Right side: Contact Button + Language Switcher */}
        <div className="hidden lg:flex items-center justify-end gap-4">
          <a
            href="#contact"
            className="btn btn-secondary"
          >
            {t('header.contact')}
          </a>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
