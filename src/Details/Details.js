import React, { Component } from 'react'
import request from 'superagent';

export default class Details extends Component {
    state = {loading:true }
    
    componentDidMount = async () => {
        const name = this.props.match.params.pokemon;
        this.setState({loading: true})
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${name}`);
        const pokemon = data.body.results[0];
        this.setState({ pokemon})
        this.setState({loading: false})
    }
    render() {
        const {
            pokemon,
        } = this.state

        return (
            <div>
                {
                    pokemon ?
                        <div className='displayPage'> 
                            <h1>{pokemon.pokemon}</h1>
                            <img src= {pokemon.url_image} alt={pokemon.pokemon} />
                            <div className='infoBox'>
                                <p>Type 1: {pokemon.type_1}</p>
                                <p>Type 2: {pokemon.type_2}</p>
                                <p>Ability 1: {pokemon.ability_1}</p>
                                <p>Ability 2: {pokemon.ability_2}</p>
                                <p>Hidden Ability: {pokemon.ability_hidden}</p>

                            </div>
                        </div>
                    : <div className='loading'></div>
                }
            </div>
        )
    }
}
