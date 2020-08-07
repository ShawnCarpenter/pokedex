import React, { Component } from 'react'
import request from 'superagent';
import Pokedex from './Pokedex';

export default class SearchPage extends Component {
  
  state = {
    data: '',
    search: '',
    searchBy: 'pokemon'
  }

  catchEm = async () => {
    const queryString= `https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.searchBy}=${this.state.search}&perPage=100`;
    const data =  await request.get(queryString)
    console.log(queryString)
    this.setState({data: data.body.results})
  }

  searchParams = (e) => {
    this.setState({search:e.target.value})
  }

  searchBy = (e) => {
    console.log(e.target.value)
    this.setState({searchBy: e.target.value})

    
  }

  componentDidMount = async () => {
    this.catchEm();
  }
  render() {
    
    return (
      <div className='App'>
        <header className='App-header'><h1>Gotta Catch em all</h1></header>
        <div className='container'>
        <div className='searchBar'>
                <div className='searchBox' >
                    <p>Search By 
                        <select onChange={(e) => { this.setState({ searchBy: e.target.value })} }>
                            <option value="pokemon">Name</option>
                            <option value="type">Type</option>
                            <option value="ability">Ability</option>
                        </select>
                        </p>
                    <input onChange={this.searchParams}></input>
                    <button onClick={this.catchEm}>CatchEm </button>
                </div>
            </div>
          <Pokedex data={this.state.data}/>
        </div>
        
      </div>
    )
  }
}
