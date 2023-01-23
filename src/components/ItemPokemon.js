import React from 'react'

function ItemPokemon(props) {
  return (
    <article className="list-pokemons-item">
      <div className="list-pokemons-item-content">
        <img
          src={props.img}
          alt="pokemon-1"
        />
        <h3>
          {props.name}
          <span>{props.type}</span>
        </h3>
      </div>
    </article>
  )
}

export default ItemPokemon