import React, { Component } from 'react'
import request from 'superagent';
import Pokedex from '../Pokedex';
import { getSearchOptions } from '../Utils';
import SearchBar from './SearchBar';


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

  getSearchChoice = async (e) => {
    const searchBy = e.target.value;
    if(searchBy !== 'pokemon'){
      const optionList = await getSearchOptions(searchBy)
      this.setState({ searchBy, optionList })
    } else this.setState({ searchBy, optionList: null })
  }
  getSortChoice = async (e) => {
    this.setState({sortBy: e.target.value})
  }
  getSearchTerm = async (e) => {
    this.setState({search:e.target.value})
  }
  componentDidMount = async () => {
    this.catchEm();
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'><h1>Gotta Catch em all</h1></header>
        <div className='container'>
          <SearchBar catchEm={this.catchEm} getSearchTerm={this.getSearchTerm} getSearchChoice={this.getSearchChoice} getSortChoice={this.getSortChoice} optionList={this.state.optionList}/>
          <Pokedex data={this.state.data}/>
        </div>
        
      </div>
    )
  }
}
