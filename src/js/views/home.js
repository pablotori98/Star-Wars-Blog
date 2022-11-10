import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Planets } from "./planets";
import { Characters } from "./characters";
import { Vehicles } from "./vehicles";

export const Home = () => (
	<>
	<div className="imgTop">
		<img src="https://64.media.tumblr.com/ddfbfc24be265f200e33e678448874ba/fc34a265b8621eec-fb/s2048x3072/95b2add499e4259db198d964e3d448d32cce408f.gif"/>
	</div>
	<div className=" my-5 container">
		<h2 className="ms-2">Planets</h2>
		<Planets />
		<h2 className="ms-2">Characters</h2>
		<Characters />
		<h2 className="ms-2">Vehicles</h2>
		<Vehicles />
	</div>
	</>
);
