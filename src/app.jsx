import { BrowserRouter, Route, Routes } from "react-router-dom"
import Films from "./pages/films";
import People from "./pages/people";
import Navbar from "./pages/navbar";
import Home from "./pages/home";
import FilmsDetail from "./pages/filmsDetail.jsx";
import PeopleDetail from "./pages/peopleDetail";


const App = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Home></Home>} />
                    <Route path="/films" element={<Films></Films>} />
                    <Route path="/films/:filmid" element={<FilmsDetail></FilmsDetail>} />
                    <Route path="/people" element={<People></People>} />
                    <Route path="/people/:peopleid" element={<PeopleDetail></PeopleDetail>} />
                </Routes>
            </div>
        </BrowserRouter>
    )

}

export default App;