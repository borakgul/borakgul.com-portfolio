import PropTypes from "prop-types";

const SkillCard = ({
  imgSrc,
  label,
  desc,
  classes
}) => {
  return (
    <div
      className={
        `flex items-center gap-4 bg-zinc-800/40 hover:bg-zinc-800/70 ring-1 ring-zinc-600 rounded-xl px-4 py-3 transition-colors duration-200 ${classes}`
      }
    >
      <figure className="bg-zinc-500/60 rounded-md w-12 h-12 p-2 flex items-center justify-center">
        <img
          src={imgSrc}
          width={28}
          height={28}
          alt={label}
          className="object-contain"
        />
      </figure>

      <div>
        <h3 className="text-white text-sm sm:text-base font-semibold">{label}</h3>
        <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">{desc}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string
}

export default SkillCard