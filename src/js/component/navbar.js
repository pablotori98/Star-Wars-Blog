import React from "react";
import { Link } from "react-router-dom";
import { Navegador } from "./navegador";
import "../../styles/home.css";


export const Navbar = () => {
	return (
		<>
		<nav className="navbar navbar-light  ">
			<div className="m-auto">
				<Link className="m-auto d-flex" to="/">
					<img className="m-auto w-25" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/800px-Star_Wars_Logo.svg.png"/>
				</Link>
			</div>
		</nav>

		<div className="divisor"></div>
		<div>
			<Navegador />
		</div>
		<div className="divisor"></div>
		</>
		
	);
};
