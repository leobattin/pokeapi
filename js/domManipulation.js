/**
 * Generate a simple pokemon card to be displayed as a list
 * 
 * @param {object} pokeObject The pokemon object to be displayed
 * @return {string} HTML text to be inserted into the DOM
 */

function pokemonListElement(pokeObject) {
    const pokeElement = `
    <li class="card" onclick="pokemonPopup(${pokeObject.id})">
      <img class= "card-image" src="${pokeObject.imageUrl}"/>
      <h2 class = "card-title">${pokeObject.id}. ${pokeObject.name}</h2>
    </li>
    `
  
    return pokeElement;
  }
  
/**
 * Generate a detailed pokemon card to be displayed as a popup
 * 
 * @param {number} id The ID of the pokemon to be displayed
 * @return {string} HTML text to be inserted into the DOM
 */

function pokemonPopup(id) {
pokeObject = getPokeObjectFromId(id)

const pokePopup = `
<div class="popup center">
    <div class="card-popup">
      <span id="closeBtn" onclick="closePopup()">x</span>
        <img class="card-image" src="${pokeObject.imageUrl}"/>
        <h2 class="card-title">${pokeObject.id}. ${pokeObject.name}</h2>
        <p><small>Weight: </small>${pokeObject.weight} hg
        | <small>Height: </small>${pokeObject.height} dm
        | <small>Abilities: </small>${pokeObject.abilities.join(', ')}
        | <small>Type: </small>${pokeObject.types.join(', ')}
    </div>
</div>
`;

let pokedex = document.getElementById("pokedex");
pokedex.innerHTML = pokedex.innerHTML + pokePopup;
}

/**
 * Close the current pokemon popup
 */
  
function closePopup() {
const popup = document.querySelector('.popup');
popup.parentElement.removeChild(popup);
}