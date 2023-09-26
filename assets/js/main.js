function convertPokemonTLi(pokemon) {
    return `
            <li class="pokemon"> 
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">poison</li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
                </div>
              </li>
              `
            
}
const pokemonsList = document.getElementById('pokemonsList')

pokeapi.getPokemons().then((Pokemons)=>{

    const listItens = []
             for (let i = 1; i < Pokemons.length; i++) {
            const pokemon = Pokemons[i];  
            listItens.push(convertPokemonTLi(pokemon))  
    }
    console.log(listItens)
    }
) 