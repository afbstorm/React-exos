import { useEffect, useState } from "react";
import Search from "../search/search";
import { GetAllWithSprites } from "../api";
import Details from "../details/details";

const Pokemon = () => {
  const [searchValue, setSearchValue] = useState("");
  const [pokemonsList, setPokemonsList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');

  const handleSelection = (e, id) => {
    setSelectedPokemon(id)
  }

  useEffect(() => {
    const getAllWithSprites = async () => {
      try {
        const pokemonData = await GetAllWithSprites();
        setPokemonsList(pokemonData)
      } catch (error) {
          console.error('Error fetching Pokemon data:', error);
      }
    };
    
    getAllWithSprites();
  }, [searchValue]);


  return (
    <>
      <Search setSearch={setSearchValue} setPokemon={setSelectedPokemon} />
      {selectedPokemon !== '' ? (
        <Details pokemon={selectedPokemon} setPokemon={setSelectedPokemon}/>
      ) : (
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
            {pokemonsList.map((poke) => (
                <div key={poke.id}
                style={{flexBasis: "15%", textAlign:"center"}}>
                  <h1>{poke.name}</h1>
                  <img src={poke.sprite} alt={poke.name} onClick={(e) => handleSelection(e, poke.id)}/>
                </div>
            ))}
        </section>
      )}
    </>
  );
};

export default Pokemon;
