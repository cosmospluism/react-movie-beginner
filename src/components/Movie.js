import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, title, coverImg, year, runningtime, genre }) {
  return (
    <div className={styles.big_box}>
      <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>
        <img src={coverImg} alt="Movie cover" className={styles.movie_cover} />
      </Link>
      <h4>
        <Link
          to={`${process.env.PUBLIC_URL}/movie/${id}`}
          className={styles.link}
        >
          {title}
        </Link>
      </h4>
      <div className={styles.middle_box}>
        <div className={styles.small_box}>
          <h5>{year}</h5>
          <span>・</span>
          <h5>{runningtime}m</h5>
        </div>
        <h5 className={styles.genre}>
          {genre[Math.floor(Math.random(genre) * genre.length)]}
        </h5>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
};

export default Movie;
