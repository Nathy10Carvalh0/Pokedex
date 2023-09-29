const pokemonsList = document.getElementById('pokemonsList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 6;
let offset = 0;


function loadPokemonItens(offset, limit){
    pokeapi.getPokemons(offset, limit).then((Pokemons = []) => {
    const newHtml = Pokemons.map((pokemon)=>`
        <li class="pokemon ${pokemon.type}"> 
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                ${pokemon.types.map((type)=>`<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
        ` ).join('')
    pokemonsList.innerHTML += newHtml
    }) 
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})