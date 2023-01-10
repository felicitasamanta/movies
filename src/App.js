import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import data from "./data/data";
import Movie from "./components/movie";

function App() {
  const movies = data;
  let allMovies = [];

  allMovies = movies.map((movie) => {
    return <Movie movie={movie} />;
  });
  return (
    <div class="justify-content-center d-flex flex-wrap gap-3">{allMovies}</div>
  );
}

export default App;
