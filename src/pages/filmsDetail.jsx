import { useEffect, useState } from "react";
import FilmCard from '../components/filmCard';
import { useParams } from "react-router-dom";

const FilmsDetail = () => {

    const [movies, setMovies] = useState([]);
    let movie;
    const { filmid } = useParams();
    useEffect(() => {
        (async () => {
            const res = await fetch('http://api-ghibli.herokuapp.com/films');
            const allFilms = await res.json();
            setMovies(allFilms);
        })();
    }, []);

    movies.map(e => {
        if (e.id === filmid) {
            movie = <FilmCard key={e.id} title={e.title} description={e.description} img={e.image} release={e.release_date} />
        }
    })
    return (
        <div className="row">
            {movie}
        </div>
    );

}


export default FilmsDetail;