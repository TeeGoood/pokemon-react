import { useEffect, useState } from 'react';
import './Card.css';
import axios from 'axios';

const Card = ({url}) => {
    const [isShowInfo, setIsShowInfo] = useState(false);
    const [pokemon, setPokemon] = useState(null);
    const type = pokemon ? pokemon.types[0].type.name : null;
    
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setPokemon(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    },[]);
    
    
    return ( 
        <>
            {pokemon && <div className="card-container">
                {isShowInfo ?   <ul className="info card">
                                    <h3>stat</h3>
                                    <li>
                                        <label htmlFor="height">height: {pokemon.height}</label>
                                        <progress id='height' value={pokemon.height} max={50}></progress>
                                    </li>
                                    <li>
                                        <label htmlFor="weight">weight: {pokemon.weight}</label>
                                        <progress id='weight' value={pokemon.weight} max={1000}></progress>
                                    </li>
                                    <li>
                                        <label htmlFor="hp">hp: {pokemon.stats[0].base_stat}</label>
                                        <progress id='hp' value={pokemon.stats[0].base_stat} max={100}></progress>
                                    </li>
                                    <li>
                                        <label htmlFor="attack">attack: {pokemon.stats[1].base_stat}</label>
                                        <progress id='attack' value={pokemon.stats[1].base_stat} max={100}></progress>
                                    </li>
                                    <li>
                                        <label htmlFor="defense">defense: {pokemon.stats[2].base_stat}</label>
                                        <progress id='defense' value={pokemon.stats[2].base_stat} max={100}></progress>
                                    </li>
                                    <button onClick={() => setIsShowInfo(!isShowInfo)} className="know-button">{isShowInfo ? "know less" :  "know more" }</button>
                                </ul>

                            : <div className="card">
                                <div className="id">#{pokemon.id}</div>
                                <img src={pokemon.sprites.front_default} alt="poketest" />
                                <h2>{pokemon.name}</h2>
                                <div className={`type-tag ${type}`}>
                                    {pokemon.types[0].type.name}
                                </div>
                                <button onClick={() => setIsShowInfo(!isShowInfo)} className="know-button">{isShowInfo ? "know less" :  "know more"}</button>
                            </div>

                }
            </div>}
        </>
    );
}
 
export default Card;