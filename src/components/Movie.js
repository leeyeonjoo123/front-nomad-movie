import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Movie({
  id,
  mediumCoverImage,
  summary,
  title,
  genres,
}) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={mediumCoverImage} alt={title} />
      <p>
        {summary.length > 235
          ? `${summary.slice(0, 235)}...더 보려면 제목 클릭`
          : summary}
      </p>
      <ul>{genres ? genres.map((g) => <li key={g}>{g}</li>) : " "}</ul>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  mediumCoverImage: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
