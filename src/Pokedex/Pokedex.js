import React, { Component } from 'react'
import PokemonCard from './PokemonCard'
import './Pokedex.css';

export default class Pokedex extends Component {
    render() {
        const pageArray = []

        for(let i=1; i <= this.props.totalPages; i++ ){
            pageArray.push(i)
        }
        console.log(pageArray)
        return (
            <div>
            <ul className='pageList'>
                
                <li><button key='prev' value="prev" onClick={this.props.pageButtonClick} disabled={this.props.currentPage>1 ? false : true}>&lt;</button></li>
                <li key='pageNumber'>Page {this.props.currentPage} of {this.props.totalPages}</li>
                <li><button key='next' value="next" onClick={this.props.pageButtonClick}disabled={this.props.currentPage < this.props.totalPages ? false : true}>&gt;</button></li>
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
