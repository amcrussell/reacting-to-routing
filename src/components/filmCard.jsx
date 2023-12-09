import { Link } from "react-router-dom";


const FilmCard = props => {

    return (
        <div className="col-xl-4 col-md-6 col-12" >
            <div className="card">
                <div className="card-body bg-light">
                    <Link to={`/films/${props.id}`} className="hidden">
                        <h1 className="card-title ">{props.title}</h1>
                    </Link>
                    <img className="card-img" src={props.img}></img>
                    <p className="opacity-50">{props.release}</p>
                    <p className="card-body desc" >{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default FilmCard;