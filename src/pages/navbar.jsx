import { Link } from "react-router-dom";



const Navbar = () => {

    return (<div className="container mt-4 d-flex justify-content-between">

        <Link className="btn btn-primary" to="/">to home</Link>
        <Link className="btn btn-primary" to="/films">to films</Link>
        <Link className="btn btn-primary" to="/people">to people</Link>
    </div>)

}



export default Navbar;