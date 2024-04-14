import { useEffect, useState } from "react";
import "../App.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getMovie();
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          {movies.map((movie) => {
            return (
              <div key={movie.id}>
                <h1>{movie.title}</h1>
                <img src={movie.medium_cover_image} alt="Movie cover" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
