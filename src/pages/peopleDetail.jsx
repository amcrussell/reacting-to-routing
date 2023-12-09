import { useEffect, useState } from "react";
import CharCard from "../components/charCard";
import { useParams } from "react-router-dom";


const PeopleDetail = () => {

    const [characters, setCharacters] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const { peopleid } = useParams();
    let person;
    useEffect(() => {
        (async () => {
            const res = await fetch('http://api-ghibli.herokuapp.com/people');
            const allChars = await res.json();
            setCharacters(allChars);
        })();
    }, []);

    characters.map(e => {
        if (e.id === peopleid) {
            person = <CharCard key={e.id} id={e.id} charLink={e.url} name={e.name} age={e.age} gender={e.gender} />
            console.log(person);
        }
    })
    return (
        <div className="row">
            {person}
        </div>
    );
};


export default PeopleDetail;