import axios from "axios";
import React,{useEffect,useState} from "react";
const AxiousPokemonAPI = (props) => {

    const [pokemon, setPokemon] = useState([]);

useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.data)
        .then(response => setPokemon(response.results))
}, );

    return (

        <div>
            {pokemon.length > 0 && pokemon.map((pokemon, index) => {
                return (<ul key={index}>
                    <li> {pokemon.name}</li>
                </ul>)
            })}
        </div>
    );
}
export default AxiousPokemonAPI;
