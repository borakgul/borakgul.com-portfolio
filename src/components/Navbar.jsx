import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = ({ navOpen }) => {
  const { t, i18n } = useTranslation();
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const navigate = useNavigate();

  const initActiveBox = () => {
    if (!lastActiveLink.current || !activeBox.current) return;

    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeCurrentLink = (event, link) => {
    event.preventDefault();

    if (!link.startsWith("#")) {
      lastActiveLink.current?.classList.remove("active");
      event.target.classList.add("active");
      lastActiveLink.current = event.target;

      initActiveBox();
      navigate(link);
      return;
    }

    const id = link.replace("#", "");

    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    initActiveBox();

    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  const navItems = [
    { label: "Home", link: "#home", className: "nav-link active", ref: lastActiveLink },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Work", link: "#work", className: "nav-link" },
    { label: "Experience", link: "#experience", className: "nav-link" },
    { label: "Projects", link: "/projects", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link md:hidden" }
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          className={className}
          onClick={(e) => activeCurrentLink(e, link)}
        >
          {label}
        </a>
      ))}

    </nav>

  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
