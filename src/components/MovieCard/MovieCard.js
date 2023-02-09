import MovieTitle from "../MovieTitle/MovieTitle";
import MovieButton from "..//MovieButton/MovieButton";
import MovieRaiting from "..//MovieRaiting/MovieRaiting";
import MovieBanner from "../MovieBanner/MovieBanner";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./movieCard.css"

const MovieCard = ({url,name,number}) => {
return <div class='container'>
    <MovieBanner url={url}/>
    <MovieRaiting number= {number} />
        <MovieTitle name={name} />
        <MovieButton text={"Wachlist"} icon={faPlus}/>
        <br/>
        <MovieButton text={"Trailer"} icon={faPlay} />
        <br/>
        
</div>
}

export default MovieCard