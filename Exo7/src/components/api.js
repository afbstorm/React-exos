import axios from 'axios';

export const GetAllWithSprites = async () => {
  try {
    const listResponse = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    const pokemonList = listResponse.data.results;

    const pokemonDataPromises = pokemonList.map(async (pokemon) => {
      const spriteResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      const id = spriteResponse.data.id;
      const spriteData = spriteResponse.data.sprites.front_default;
      return {id: id, name: pokemon.name, sprite: spriteData };
    });

    const pokemonData = await Promise.all(pokemonDataPromises);

    return pokemonData;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    return [];
  }
};

export const GetDetails = async (id) => {
  try {
    const pokemonDetails = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return pokemonDetails.data
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    return [];
  }
}