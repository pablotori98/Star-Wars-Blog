import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Planets = () => {

    const [planet, setPlanet] = useState({})

useEffect(()=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://swapi.dev/api/planets/", requestOptions)
        .then(response => response.json())
        .then(planet => setPlanet(planet))
        .catch(error => console.log('error', error));
    },[])

    return (
    <>
    <div className="d-flex flex-wrap justify-content-evenly container">
        {planet.results?.map((element, index)=>(

            <div className="carta">
                <div className="card m-2" key={index} style={{width: "18rem"}}>
                    <img src={"https://starwars-visualguide.com/assets/img/planets/"+(index+2)+".jpg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{element.name}</h5>
                        <p className="card-text "><strong> Tipo de clima:</strong> {element.climate}</p>
                        <p className="card-text "><strong>Terreno:</strong> {element.terrain}</p>
                        <p className="card-text "><strong>Población:</strong> {element.population} habitantes</p>
                        <p className="card-text "><strong>Rotación</strong>  {element.rotation_period} dias</p>


                        <Link to= {"/planets/"+(index+2)} className="btn btn-yellow">Saber más</Link>
                    </div>
                </div>
            </div>

        ))}

    </div>
    </>
    )
}