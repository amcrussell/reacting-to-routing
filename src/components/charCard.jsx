import { Link } from "react-router-dom";


const CharCard = props => {


    return (
        <div className="col-3" >
            <div className="card">
                <Link to={`/people/${props.id}`} className="hidden">
                    <div className="card-body bg-light">
                        <h1>{props.name}</h1>
                        <p>age: {props.age}</p>
                        <p>gender: {props.gender}</p>

                    </div>
                </Link>
            </div>
        </div>
    )

}

export default CharCard;