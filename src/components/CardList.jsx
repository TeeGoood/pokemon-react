import './CardList.css';
import Card from "./Card.jsx";
import LoadMoreBtn from './LoadMoreBtn.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';


const CardList = () => {
    const [pokemonData, setPokemonData] = useState({});
    const pokemonList = pokemonData.results;
    const nextUrl = pokemonData.next;

    useEffect(() => {
       axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => setPokemonData(res.data))
        .catch(error => console.log(error));
    },[])

    const handleLoadMore = (nextUrl) => {
        let newPokemonData = null;
        axios.get(nextUrl)
            .then(res => {
                newPokemonData = res.data;
                setPokemonData( { ...newPokemonData, 
                                results: pokemonData.results.concat(newPokemonData.results)})
            })
            .catch(error => {
                console.log(error);
            })
    }

    return ( 
        <div className="card-list-container">
            <div className="card-list">
                {pokemonList && pokemonList.map(pokemon => <Card url={pokemon.url} key={pokemon.name}/>)}
            </div>
            <LoadMoreBtn handleLoadMore={() => handleLoadMore(nextUrl)}/>
        </div>
    );
}
 
export default CardList;