
import PropTypes from 'prop-types';

const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  classes
}) => {
  const baseClasses =
    "inline-flex items-center gap-2 bg-gradient-to-r from-zinc-800 via-rose-900 to-zinc-900 hover:brightness-110 text-white text-sm sm:text-base font-semibold px-6 py-2.5 rounded-lg shadow-md transition-all duration-300";

  if (href) {
    return (
      <a href={href} target={target} className={`${baseClasses} ${classes || ""}`}>
        {label}
        {icon && <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${classes || ""}`}>
      {label}
      {icon && <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>}
    </button>
  );
};


ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
}

const ButtonOutline = ({
  href,
  target = '_self',
  label,
  icon,
  classes
}) => {
  const baseClasses =
    "inline-flex items-center gap-2 border border-zinc-600 text-zinc-200 hover:border-rose-700 hover:text-rose-300 text-sm sm:text-base font-semibold px-6 py-2.5 rounded-lg transition-all duration-300";

  if (href) {
    return (
      <a href={href} target={target} className={`${baseClasses} ${classes || ""}`}>
        {label}
        {icon && <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${classes || ""}`}>
      {label}
      {icon && <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>}
    </button>
  );
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
}

export {
  ButtonPrimary,
  ButtonOutline
}