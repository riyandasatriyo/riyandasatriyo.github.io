import axios from "axios";

export const getPokeList = async () =>{
    const List = await axios.get('https://pokeapi.co/api/v2/pokemon')
    return List.data.results
}

export const getPokeSearch = async (q) =>{
    const Search = await axios.get(`https://pokeapi.co/api/v2/pokemon/${q}`)
    return Search.data
}

 export const getPokeAbility = async (q) =>{
    const Ability = await axios.get(`https://pokeapi.co/api/v2/pokemon/${q}`)
    return Ability.data.abilities
 }

 export const getPokeType = async (q) =>{
     const Type = await axios.get(`https://pokeapi.co/api/v2/pokemon/${q}`)
    return Type.data.types
 }

 export const getPokeMove = async (q) =>{
     const Move = await axios.get(`https://pokeapi.co/api/v2/pokemon/${q}`)
    return Move.data.moves
 }