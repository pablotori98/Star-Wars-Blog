import { element } from "prop-types";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Planet = ( {Planets} ) => {

    const [singlePlanet, setSinglePlanet] = useState({})
    const params = useParams ()

    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://swapi.dev/api/planets/"+params.idPlanets, requestOptions)
            .then(response => response.json())
            .then(planet => setSinglePlanet(planet))
            .catch(error => console.log('error', error));
        },[])

        return (
        
            <div class="jumbotron d-flex container">
                <img src={"https://starwars-visualguide.com/assets/img/planets/" + ((params.idPlanets)) + ".jpg"}/>
                <div className="p-4">
                    <h1 class="display-4">{singlePlanet.name}</h1>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr class="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                </div>
            </div>

            
        )

}