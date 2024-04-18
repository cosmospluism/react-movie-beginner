import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, coverImg }) {
  return (
    <div>
      <h1>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h1>
      <img src={coverImg} alt="Movie cover" />
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
};

export default Movie;
