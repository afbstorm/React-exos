import PropTypes from 'prop-types';
import { GetDetails } from '../api';
import { useEffect, useState } from 'react';

const Details = (props) => {

    const { pokemon, setPokemon } = props;
    const [pokemonDetails, setPokemonDetails] = useState([])

    const handleSelection = () => {
        setPokemon('');
    }

    useEffect(() => {
        if (pokemon !== '') {
           const getPokemonDetails = async () => {
            try {
                const details = await GetDetails(pokemon);
                setPokemonDetails([details])
            } catch (error) {
            console.error('Error fetching Pokemon data:', error);
                }
            }
            getPokemonDetails(pokemon);
        }   
    }, [pokemon])

    console.log(pokemonDetails)
    return(
        <>
        <button onClick={handleSelection}>Back to the list</button>
        {pokemonDetails.map((p) => 
        <div key={p.id}>
            <h1>{p.name}</h1>
            <img src={p.sprites.front_default} alt={p.name}/>
         </div>
        )}
       
        </>
    )
};

Details.propTypes = {
    pokemon: PropTypes.number,
    setPokemon: PropTypes.func
};

export default Details;