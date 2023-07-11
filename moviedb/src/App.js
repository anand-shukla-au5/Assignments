import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoviesByActor } from './Slicers/movieSlicer'
import Header from "./Components/Header";
import ActorCard from "./Components/ActorCard";
import NoResults from "./Components/Noresult";

const Result = React.lazy(() => import("./Components/ResultsMovie"));

function App() {

  const movieList = useSelector((state) => state.movieReducer);
  const dispatch = useDispatch();

  console.log('apikey', process.env.REACT_APP_API_KEY, movieList);
  return (
    <div className="App">
      <title>TMBD 2.0</title>
      <Header onSearch={(searchTerm) => {
        dispatch(fetchMoviesByActor(searchTerm));
      }} />

      {movieList.actorMovieData ?
        <>
          <ActorCard actor={movieList.actorMovieData?.actorData} />
          <Result results={movieList.actorMovieData.moviesData ? movieList.actorMovieData.moviesData : []} />
        </>
        :
        <NoResults />
      }
    </div>
  );
}

export default App;
