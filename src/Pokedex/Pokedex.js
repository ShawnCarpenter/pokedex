import React, { Component } from 'react'
import PokemonCard from './PokemonCard'
import './Pokedex.css';

export default class Pokedex extends Component {
    render() {
        return (
            <div>
            <ul className='pageList'>
                
                <li><button key='prev' value="prev" onClick={this.props.pageButtonClick}>&lt;</button></li>
                
                <li><button key='next' value="next" onClick={this.props.pageButtonClick}>&gt;</button></li>
            </ul>
            <ul className='pokeList'>
                {
                    this.props.data ? this.props.data.map(pokemon => <PokemonCard key={pokemon._id} pokemon={pokemon} />) : <div className='loading'></div>
                }
                
            </ul>
            </div>
        )
    }
}
