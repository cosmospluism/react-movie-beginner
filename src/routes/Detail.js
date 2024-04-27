import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import choco from "./C.png";

function Detail() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovieDetail();
  });

  let movieBgImg = movie.background_image;
  const movieDescription = movie.description_intro;

  return (
    <div>
      <div className={styles.top_box}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h2>BroWnie No.2</h2>
        </Link>
        <div className={styles.search_box}>
          <input type="text" placeholder="Search for movies or TV shows" />
          <button>Sign In</button>
        </div>
      </div>
      <div>
        <img className={styles.bg_img} src={movieBgImg} alt="bg cover" />
        <div className={styles.middle_box}>
          <img src={movie.medium_cover_image} alt="small cover" />
          <div>
            <h1>{movie.title}</h1>
            <div className={styles.small_box}>
              <img className={styles.choco_img} src={choco} alt="choco icon" />
              <h4>{movie.year}</h4>
              <h4>{movie.runtime} min</h4>
              <h4>{movie.rating} / 10</h4>
            </div>
            <p>
              {movieDescription
                ? movieDescription.length > 430
                  ? `${movieDescription.slice(0, 430)}...`
                  : movieDescription
                : "There's no description"}
            </p>
            <div>
              <button>▶︎ Watch now</button>
            </div>
          </div>
        </div>
        <footer>
          <span>© BroWnie No.2 2024</span>
        </footer>
      </div>
    </div>
  );
}

export default Detail;
