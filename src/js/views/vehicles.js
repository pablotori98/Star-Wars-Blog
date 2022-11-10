import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Vehicles = () => {

    const vehiclesObj= {
    1: "https://lumiere-a.akamaihd.net/v1/images/sandcrawler-bio-1_11fee365.jpeg?region=291%2C71%2C989%2C556&width=960", 
    2: "https://i.pinimg.com/originals/bd/d9/58/bdd9587f74f897ad26349d6a7e76d194.jpg",
    3:"https://starwarsataglance.files.wordpress.com/2014/09/lukelands.jpg",
    4:"https://pm1.narvii.com/6378/bd22aaab0a04d5ca26b4ff924272161f0636e1bd_hq.jpg",
    5: "https://www.metalearth.com/content/images/thumbs/0000369_snowspeedertrade_1200.png",
    6: "https://i.etsystatic.com/22170155/r/il/ee749c/3488971225/il_fullxfull.3488971225_85tx.jpg",
    7: "https://m.media-amazon.com/images/I/71m5sRrZqPL._AC_SL1500_.jpg",
    8: "https://imodeler.com/uploads/2019/09/l/laszlopetes_190912_5d7a883b81552-1600x1061.jpg",
    9: "https://pbs.twimg.com/media/EO1p3crXkAAcZT2.jpg",
    10: "https://www.renderhub.com/dazinbane/jabbas-barge/jabbas-barge-01.jpg"}

    const [vehicle, setVehicle] = useState({})

useEffect(()=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://swapi.dev/api/vehicles/", requestOptions)
        .then(response => response.json())
        .then(vehicle => setVehicle(vehicle))
        .catch(error => console.log('error', error));
    },[])

      return (
        <>
        <div className="d-flex flex-wrap justify-content-evenly container">

            {vehicle.results?.map((element, index) => {
            return(
            <div className="carta">
            <div className="card m-2 vehiculo" style={{width: "18rem"}}>
                <img src={vehiclesObj[(index+1)]} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{element.name}</h5>
                    <p className="card-text "><strong> Modelo:</strong> {element.model} </p>
                    <p className="card-text "><strong>Constructor:</strong>{element.manufacturer} </p>
                    <p className="card-text "><strong>Longitud:</strong>{element.length} </p>
                    <p className="card-text "><strong>Coste en creditos:</strong>{element.cost_in_credits} </p>



                    <Link to="" className="btn btn-yellow ">Saber más</Link>
                </div>
            </div>
            </div>
            )

       

            })}
        </div>
        </>
      )

}