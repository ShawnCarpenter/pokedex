import React, { Component } from 'react'
import './PokemonCard.css'

export default class PokemonCard extends Component {
    render() {
        const borderStyle = {
            borderColor:this.props.pokemon.color_1
        } 
        const infoBoxBorder = {
            borderColor:this.props.pokemon.color_2==='NA'? '#316ab2' : this.props.pokemon.color_2
        }
        return (
            <li style={borderStyle } key={this.props.pokemon._id} >
                <h2>{this.props.pokemon.pokemon}</h2>
                <img src={this.props.pokemon.url_image} alt={this.props.pokemon.pokemon} />
                <div className='infoBox' style={infoBoxBorder}>
                <p>Type 1: {this.props.pokemon.type_1}</p>
                <p>Ability: {this.props.pokemon.ability_1}</p>
                </div>
                

                
            </li>
        )
    }
}
