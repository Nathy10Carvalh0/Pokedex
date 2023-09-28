function convertPokemonToLi(pokemon) {
    return `
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
              `
            
}

const pokemonsList = document.getElementById('pokemonsList')

pokeapi.getPokemons().then((Pokemons = []) => {
    const newHtml = Pokemons.map(convertPokemonToLi).join('')
    pokemonsList.innerHTML = newHtml

    }
) 