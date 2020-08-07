import React, { Component } from 'react'
import PokemonCard from './PokemonCard'
import './Pokedex.css';

export default class Pokedex extends Component {
    render() {
        return (
            <ul className='pokeList'>
                {
                    this.props.data ? this.props.data.map(pokemon => <PokemonCard key={pokemon._id} pokemon={pokemon} />) : <div className='loading'></div>
                }
                
            </ul>
        )
    }
}
