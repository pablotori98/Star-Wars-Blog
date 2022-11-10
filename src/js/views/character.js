import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Character = () => {

    const [people, setPeople] = useState({})
    const params = useParams()


    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://swapi.dev/api/people/"+params.idCharacter, requestOptions)
            .then(response => response.json())
            .then(people => setPeople(people))
            .catch(error => console.log('error', error));

        },[])


    return (

        <div className="jumbotron d-flex container">
            <img src={"https://starwars-visualguide.com/assets/img/characters/" + ((params.idCharacter)) + ".jpg"}/>
            <div className="p-4">
                <h1 className="display-4">{people.name}</h1>
                <p className="card-text "><strong> Altura:</strong> {people.height}</p>
                <p className="card-text "><strong>Color de pelo:</strong> {people.hair_color}</p>
                <p className="card-text "><strong>Genero:</strong> {people.gender}</p>
            </div>
        </div>
    )
}