import React,{useEffect,useState} from "react";
const PokemonAPI = (props) => {
    const [pokemon, setPokemon] = useState([]);
    

const ClickHandler=()=>{
    fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(response => setPokemon(response.results))

}

// useEffect(() => {
//     fetch("https://pokeapi.co/api/v2/pokemon")
//         .then(response => response.json())
//         .then(response => setPokemon(response.results))
// }, [useState.isclicked]);
    return (

        <div>
        <button onClick={ClickHandler}>Fetch Pokemon</button>
            {pokemon.length > 0 && pokemon.map((pokemon, index) => {
                return (<ul key={index}>
                    <li> {pokemon.name}</li>
                </ul>)
            })}
        </div>
    );
}
// export default PokemonAPI;

