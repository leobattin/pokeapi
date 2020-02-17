let pokedex = document.getElementById("pokedex"); 

// display all pokemons after fetching data
fetchPokemonFromApi(20).then((pokeList) => {
  for (let pokeObject of pokeList) {
    pokedex.innerHTML = pokedex.innerHTML + pokemonListElement(pokeObject);
  }
});