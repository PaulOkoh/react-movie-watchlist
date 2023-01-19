import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  const addMovie = (movie) => setList([...list, movie]);
  const removeMovie = (movie) => {
    let newState = list.filter((mov) => {
      return mov !== movie;
    });
    setList(newState);
  };
  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          movieList={movieList}
          page={page}
          setPage={setPage}
          list={list}
          addMovie={addMovie}
        />
        <Watchlist list={list} />
      </main>
    </div>
  );
}

export default App;
