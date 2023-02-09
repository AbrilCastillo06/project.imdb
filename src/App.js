import "./App.css";
import MovieCard from "./components/MovieCard/MovieCard";
import movies from './data/data.json'

function App() {
  return (
    <div className="App">
      <div id="card">
        <div className='movies'>
        {movies.map(
          movie => (<MovieCard name={movie.Title} url={movie.Images[0]} number={movie.imdbRating} />))
          }
       </div>
      </div>  
    </div>
  );
}

export default App;
