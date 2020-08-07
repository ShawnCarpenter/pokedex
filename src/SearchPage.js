import React, { Component } from 'react'
import request from 'superagent';
import Pokedex from './Pokedex';
import { getSearchOptions } from './Utils';


export default class SearchPage extends Component {
  
  state = {
    data: '',
    search: '',
    searchBy: 'pokemon',
    sortBy: 'pokemon',
    optionList: null
  }

  catchEm = async () => {
    const queryString= `https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.searchBy}=${this.state.search}&sort=${this.state.sortBy}&perPage=100`;
    const data =  await request.get(queryString)
    this.setState({data: data.body.results})
  }

  getSearchChoices = async (e) => {
    const searchBy = e.target.value;
    if(searchBy !== 'pokemon'){
      const optionList = await getSearchOptions(searchBy)
      this.setState({optionList, searchBy})
      console.log(this.state)
    } else this.setState({ searchBy, optionList: null })

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
                       <select onChange={this.getSearchChoices }>
                          <option value="pokemon" defaultValue>Name</option>
                          <option value="type">Type</option>
                          <option value="ability">Ability</option>
                          <option value="shape">Shape</option>
                          <option value="eggGroup">Egg Group</option>
                      </select>
                    </p>
                    <p>Sort By 
                       <select onChange={(e) => { this.setState({ sortBy: e.target.value })} }>
                          <option value="pokemon" defaultValue>Name</option>
                          <option value="type">Type</option>
                          <option value="ability">Ability</option>
                      </select>
                    </p>
                    <input onChange={(e) => { this.setState({ search: e.target.value })}}></input>
                    <button onClick={this.catchEm}>CatchEm </button>
                </div>
                <ul>
                  {
                    this.state.optionList && this.state.optionList.map( option => <li key={option}>{option}</li>)
                  }
                </ul>
            </div>
          <Pokedex data={this.state.data}/>
        </div>
        
      </div>
    )
  }
}
