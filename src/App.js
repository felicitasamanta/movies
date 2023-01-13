import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./components/movie.css";
import bootstrap from "bootstrap";

import data from "./data/data";
import Movie from "./components/movie";
import Header from "./components/header";

function App() {
  const movies = data;
  let allMovies = [];

  allMovies = movies.map((movie, index) => <Movie key={index} movie={movie} />);
  return (
    <div>
      <Header></Header>
      <div className=" container card_container justify-content-center d-flex flex-wrap gap-3 mt-5">
        {allMovies}
      </div>
    </div>
  );
}

export default App;
