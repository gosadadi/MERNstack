import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router";
const LukeAPIwalker = (props) => {
    const {id } = useParams();
    const [people, setPeople] = useState([]);
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => setPeople(response.data))
            .catch(err => console.log(err));
    }, [{id}]);

    return (
        <div>
            <h2>Name:{people.name}</h2>
            <p>Height:{people.height}</p>
            <p>Mass:{people.mass}</p>
            <p>Hair Color:{people.hair_color}</p>
            <p>Skin Color:{people.skin_color}</p>
        </div>
    );
}
export default LukeAPIwalker;
