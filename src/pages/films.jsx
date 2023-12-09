import { useEffect, useState } from "react";
import FilmCard from '../components/filmCard';


const Films = () => {

    const [movies, setMovies] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://api-ghibli.herokuapp.com/films');
            const allFilms = await res.json();
            setMovies(allFilms);
        })();
    }, [setLoaded]);


    if (!loaded) {
        return (
            <>
                <button className="btn btn-danger " onClick={setLoaded(true)}>loading...</button>
            </>
        )
    }
    return (
        <div className="row">
            {movies.map(e => (
                <FilmCard key={e.id} id={e.id} title={e.title} description={e.description} img={e.image} release={e.release_date} />
            ))}
        </div>
    );

}


export default Films;