import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  }, []);
  return (
    <div>
      <img src={movie.background_image} alt="bg cover" />
    </div>
  );
}

export default Detail;
