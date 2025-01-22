
const pokeapi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types =  pokeDetail.types.map((typeSlot)=> typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    pokemon.photoShiny = pokeDetail.sprites.other.dream_world.front_shiny

    const abilities = pokeDetail.abilities.map((slot) => {
        let str = slot.ability.name
        return str.charAt(0).toUpperCase() + str.slice(1)
    }).join(', ')
    pokemon.abilities = abilities

    pokemon.height = pokeDetail.height
    pokemon.weight = pokeDetail.weight

    return pokemon
}

pokeapi.getPokemonsDetail = (pokemon) => {
    return  fetch(pokemon.url)
        .then((response)=> response.json())
        .then(convertPokeApiDetailToPokemon)
}


pokeapi.getPokemons = (offset = 0, limit = 6)  => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response)=> response.json()) 
        .then((jsonBody)=> jsonBody.results)
        .then((Pokemons)=> Pokemons.map(pokeapi.getPokemonsDetail))
        .then((detailRequests)=> Promise.all(detailRequests))
        .then((pokemonDetails)=> pokemonDetails)
}
pokeapi.getPokemonDetailById = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    return fetch(url)
        .then((response) => response.json())
        .then((pokemon) => convertPokeApiDetailToPokemon(pokemon))
}   