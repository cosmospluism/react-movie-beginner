import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  console.log(id);
  // const getMovieDetail = async () => {
  //   const json = await (
  //     await fetch(`"https://yts.mx/api/v2/list_movies.json?movie_id=${id}"`)
  //   ).json();
  //   console.log(json);
  // };
  return;
}

export default Detail;
