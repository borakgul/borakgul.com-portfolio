import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';
import ReviewCard from './ReviewCard';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Review = () => {
  const { t } = useTranslation();

  useGSAP(() => {
    gsap.matchMedia().add('(min-width: 1024px)', () => {
      gsap.to('.scrub-slide', {
        scrollTrigger: {
          trigger: '.scrub-slide',
          start: '-100% center',
          end: '200% center',
          scrub: 1,
        },
        x: -200,
        ease: 'none',
      });
    });
  }, []);

  const experiences = t('review.items', { returnObjects: true });

  return (
    <section id="experience" className="section bg-zinc-900 text-white py-12">
      <div className="container mx-auto">
        <h2 className="headline-2 mb-8 reveal-up text-center">{t('review.title')}</h2>

        <div className="scrub-slide grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map(({ content, name, imgSrc, company }, key) => (
            <div key={key} className="h-full">
              <ReviewCard
                name={name}
                imgSrc={imgSrc}
                company={company}
                content={content}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
