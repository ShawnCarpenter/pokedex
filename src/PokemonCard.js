import React, { Component } from 'react'
import './PokemonCard.css'

export default class PokemonCard extends Component {
    render() {
        return (
            <li key={this.props.pokemon._id} >
                <h2 key={this.props.pokemon.pokemon}>{this.props.pokemon.pokemon}</h2>
                <img src={this.props.pokemon.url_image} alt={this.props.pokemon.pokemon} />

                
            </li>
        )
    }
}
