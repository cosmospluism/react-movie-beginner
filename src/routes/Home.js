import { useEffect, useState } from "react";
import "../App.css";
import Movie from "../components/Movie";

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
    }, 200);
    console.log(timeoutId);
  }, []);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          {movies.map((movie) => {
            return (
              <Movie
                id={movie.id}
                title={movie.title}
                coverImg={movie.medium_cover_image}
                key={movie.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
