import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  return (
    <div>
      <img
        className={styles.bg_img}
        src={movie.background_image}
        alt="bg cover"
      />
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
          <p>{movie.description_intro}</p>
        </div>
      </div>
      <div className={styles.bottom_box}>
        <h2>to be continued....</h2>
      </div>
    </div>
  );
}

export default Detail;
