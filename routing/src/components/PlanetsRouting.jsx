import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router";
const PlanetsRouting = (props) => {
    const {id } = useParams();
    const [planet, setPlanet] = useState([]);
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => setPlanet(response.data))
            .catch(err => console.log(err));
    }, [{id}]);

    return (
        <div>
            <h2>Name:{planet.name}</h2>
            <p>Climate:{planet.climate}</p>
            <p>Terrain:{planet.terrain}</p>
            <p>Surface Water:{planet.surface_water}</p>
            <p>Population:{planet.population}</p>
        </div>
    );
}
export default PlanetsRouting;
