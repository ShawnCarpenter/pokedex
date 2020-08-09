import React, { Component } from 'react'
import PokemonCard from './PokemonCard'
import './Pokedex.css';

export default class Pokedex extends Component {
    render() {
        const {
            currentPage,
            totalPages,
            pageButtonClick
        } = this.props;

        const pageArray = []

        for(let i=1; i <= this.props.totalPages; i++ ){
            
            if(i >= (currentPage-3) && i <= (currentPage+3) )pageArray.push(i)
        }
        console.log(pageArray)
        
        return (
            <div>
            <ul className='pageList'>
                { totalPages ? <>
                    <li><button key='prev' value="prev" onClick={pageButtonClick} disabled={currentPage > 1 ? false : true}>&lt;</button></li>
                    {
                        pageArray.map(page =>{
                           return  <li key={page}><button>{page}</button></li>
                        }) 
                    }
                    
                    <li><button key='next' value="next" onClick={pageButtonClick}disabled={currentPage < totalPages ? false : true}>&gt;</button></li>
                    </> : <h1>No results, try another search</h1>
                }
                
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
