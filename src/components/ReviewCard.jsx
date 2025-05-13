import PropTypes from 'prop-types';

const ReviewCard = ({
  content,
  imgSrc,
  name,
  company
}) => {
  return (
    <div className="flex flex-col justify-between h-full bg-zinc-800 p-5 rounded-xl text-zinc-100 shadow-md">
      <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 flex-1">
        {content}
      </p>

      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg shrink-0">
          <img
            src={imgSrc}
            alt={name}
            width={44}
            height={44}
            loading="lazy"
            className="img-cover"
          />
        </figure>

        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-xs sm:text-sm text-zinc-400 tracking-wide">{company}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired
};

export default ReviewCard;
