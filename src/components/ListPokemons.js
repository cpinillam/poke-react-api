import React from 'react'
import ItemPokemon from './ItemPokemon'
import pokemons from '../assets/js/data.js'

function ListPokemons() {
  

  return (
    <main className="list-pokemons">
     { pokemons.map(item => {
        return <ItemPokemon key={item.name} name={item.name} type={item.type} img={item.sprite} />
     })}  
    </main>
  )
}

export default ListPokemons