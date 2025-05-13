import { useTranslation } from "react-i18next";
import { useState } from "react";
import { GlobeIcon } from "lucide-react";

const languages = [
  { code: "en", label: "English", flag: "EN" },
  { code: "tr", label: "Türkçe", flag: "TR" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const currentLang = i18n.language;

  const toggleMenu = () => setOpen(!open);
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left z-50">
      <button
        onClick={toggleMenu}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-zinc-800 border border-zinc-600 rounded-lg hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
      >
        <GlobeIcon className="w-4 h-4" />
        {languages.find(l => l.code === currentLang)?.flag}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 origin-top-right bg-zinc-900 border border-zinc-700 divide-y divide-zinc-700 rounded-lg shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-zinc-700 ${currentLang === lang.code ? 'text-sky-400' : 'text-zinc-300'}`}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
