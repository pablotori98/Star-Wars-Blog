import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const Characters = () => {

    const [people, setPeople] = useState({})

    useEffect(()=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://swapi.dev/api/people/", requestOptions)
        .then(response => response.json())
        .then(people => setPeople(people))
        .catch(error => console.log('error', error));
      },[])


        
  return (
        <>
        <div className="d-flex flex-wrap justify-content-evenly container">
            {people.results?.map((element, index)=>
            {return (
    
                <div className="carta">
                    <div className="card m-2" style={{width: "18rem"}} key={index} >
                        <img src={"https://starwars-visualguide.com/assets/img/characters/"+(index+1)+".jpg"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{element.name}</h5>
                            <p className="card-text "><strong> Altura:</strong> {element.height}</p>
                            <p className="card-text "><strong>Color de pelo:</strong> {element.hair_color}</p>
                            <p className="card-text "><strong>Genero:</strong> {element.gender}</p>
    
    
                            <Link to={"/character/"+(index+1)} className="btn btn-yellow">Saber más</Link>
                        </div>
                    </div>
                </div>
    
            )})}
     
        </div>
        </>
        )
}