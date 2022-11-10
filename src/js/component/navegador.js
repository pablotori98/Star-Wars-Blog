import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";


export const Navegador = () => {
    return (
        <ul className="barraNavegacion nav d-flex justify-content-center container">
            <li className="nav-item "><Link className="px-5 nav-link" to="/">Home</Link></li>
            <li className="nav-item "><Link className="px-5 nav-link" to="/planets">Planets</Link></li>
            <li className="nav-item "><Link className="px-5 nav-link" to="/characters">Characters</Link></li>
            <li className="nav-item "><Link className="px-5 nav-link" to="/vehicles">Vehicles</Link></li>
            <li className="nav-item "><Link className="px-5 nav-link" to="/starships">Starships</Link></li>
        </ul>

    )
}