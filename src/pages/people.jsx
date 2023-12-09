import { useEffect, useState } from "react";
import CharCard from "../components/charCard";


const People = () => {

    const [characters, setCharacters] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://api-ghibli.herokuapp.com/people');
            const allChars = await res.json();
            setCharacters(allChars);
        })();
    }, [setLoaded]);

    return (
        <div className="row">
            {characters.map(e => (
                <CharCard key={e.id} id={e.id} charLink={e.url} name={e.name} age={e.age} gender={e.gender} />
            ))}
        </div>
    );
};


export default People;