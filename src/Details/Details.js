import React, { Component } from 'react'
import request from 'superagent';

export default class Details extends Component {
    state = {loading:true }
    
    componentDidMount = async () => {
        const name = this.props.match.params.pokemon;
        this.setState({loading: true})
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${name}`);

        console.log(data)
        const pokemon = data.body.results[0];
        console.log(pokemon)
        this.setState({ pokemon})
        this.setState({loading: false})
    }
    render() {
        const {
            pokemon,
        } = this.state
        console.log(pokemon)
        return (
            <div>
                {
                    pokemon ?
                        <div className='displayPage'> 
                            <h1>{pokemon.pokemon}</h1>
                            <img src= {pokemon.url_image} alt={pokemon.pokemon} />
                        </div>
                    : <h1>Loading</h1>
                }
            </div>
        )
    }
}
