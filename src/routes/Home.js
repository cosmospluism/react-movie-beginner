import { useEffect, useState } from "react";
import "../App.css";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=7.0&sort_by=year"
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
          <div className={styles.top_box}>
            <h2>BroWnie No.2</h2>
            <div className={styles.middle_box}>
              <nav>
                <ul className={styles.nav_box}>
                  <li>Home</li>
                  <li>New</li>
                  <li>Popular</li>
                  <li>Lists</li>
                  <li>Animation</li>
                </ul>
              </nav>
              <div className={styles.search_box}>
                <input
                  type="text"
                  placeholder="Search for movies or TV shows"
                />
                <button>Sign In</button>
              </div>
            </div>
          </div>
          <section>
            <div className={styles.nav_box}>
              <h4>All</h4>
              <h4>Movies</h4>
              <h4>TV Shows</h4>
            </div>
            <ul className={styles.nav_box}>
              <li>Release Year ⌵</li>
              <li>Genres ⌵</li>
              <li>Rating ⌵</li>
            </ul>
          </section>
          <main>
            {movies.map((movie) => {
              return (
                <Movie
                  id={movie.id}
                  title={movie.title}
                  coverImg={movie.medium_cover_image}
                  key={movie.id}
                  year={movie.year}
                  runningtime={movie.runtime}
                  genre={movie.genres}
                />
              );
            })}
          </main>
          <footer>
            <span>© BroWnie No.2 2024</span>
          </footer>
        </div>
      )}
    </div>
  );
}

export default Home;
