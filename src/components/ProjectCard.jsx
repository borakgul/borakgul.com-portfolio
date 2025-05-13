import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink,
  classes
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/projects');
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); // kartın tıklamasını engelle
    window.open(projectLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={handleCardClick}
      className={
        "relative p-4 rounded-2xl h-full flex flex-col justify-between cursor-pointer bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
        classes
      }
    >
      <figure className="w-full h-[220px] rounded-lg mb-3 overflow-hidden bg-zinc-900">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="flex items-center justify-between gap-4 relative z-20">
        <div>
          <h3 className="text-white text-base font-semibold mb-2">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-7 text-xs text-zinc-400 bg-zinc-50/5 grid items-center px-2.5 rounded-md"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

      <button
  onClick={handleButtonClick}
  className="w-10 h-10 rounded-md grid place-items-center bg-gradient-to-r from-zinc-800 via-rose-900 to-zinc-900 text-white shrink-0 hover:brightness-110 transition"
  aria-label={`Open GitHub for ${title}`}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.205 11.387c.6.113.82-.26.82-.577v-2.041c-3.338.726-4.042-1.416-4.042-1.416-.546-1.388-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.833 2.807 1.304 3.492.997.108-.776.42-1.304.762-1.604-2.665-.305-5.467-1.334-5.467-5.933 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.243 2.873.119 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.48 5.921.43.37.823 1.102.823 2.222v3.293c0 .32.218.694.825.576A12 12 0 0024 12c0-6.627-5.373-12-12-12z" />
  </svg>
</button>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string
};

export default ProjectCard;
