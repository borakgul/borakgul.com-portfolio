import { Routes, Route, useLocation } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";


gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  const location = useLocation();

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: element,
            start: '-200 bottom',
            end: 'bottom 80%',
            scrub: true,
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
        }
      );
    });
  }, [location.pathname]); 

  return (
    <ReactLenis root>

      <ScrollToTop />

      {<Header />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <main>
                <Hero />
                <About />
                <Skill />
                <Work />
                <Review />
                <Contact />
              </main>
              <Footer />
            </>
          }
        />

        <Route
          path="/projects"
          element={
            <>
              <Projects />
              <Footer />
            </>
          }
        />

       
      </Routes>
    </ReactLenis>
  );
};

export default App;
