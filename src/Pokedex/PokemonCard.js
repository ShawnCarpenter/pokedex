import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './PokemonCard.css'

export default class PokemonCard extends Component {
    render() {
        const pokemon = this.props.pokemon;

        const borderStyle = {
            borderColor:pokemon.color_1
        } 
        const infoBoxBorder = {
            borderColor:pokemon.color_2==='NA'? '#316ab2' : pokemon.color_2
        }
        const imgShadowStyle = {
            color:pokemon.color_1
        }

        return (
                <Link to={`/Details/${pokemon.pokemon}`}>
                    <li className='pokemonCard'style={borderStyle } key={pokemon._id} >
                        <h2>{pokemon.pokemon}</h2>
                        <img src={pokemon.url_image} alt={pokemon.pokemon} style={imgShadowStyle}/>
                        <div className='infoBox' style={infoBoxBorder}>
                            <p>Type 1: {pokemon.type_1}</p>
                            <p>Ability: {pokemon.ability_1}</p>
                        </div>
                    </li>
                </Link>
        )
    }
}
