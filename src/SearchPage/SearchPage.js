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
    sortBy: '',
    optionList: null,
    currentPage: 1,
    totalPages: 1,
  }
  componentDidMount = async () => {
    const params = new URLSearchParams(this.props.location.search);
    const searchBy = params.get('searchBy');
    const page = params.get('page');
    const search = params.get('search');
    console.log(page)
    console.log(searchBy)
    console.log(search)
    if(searchBy && page && search) {
      await this.setState({
        searchBy: searchBy,
        currentPage: page,
        search: search,
      })
    }
    await this.catchEm();
    
  }
  catchEm = async () => {
    await this.setState({isLoading:true})

    
    const queryString= `https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.searchBy}=${this.state.search}&sort=${this.state.sortBy}&perPage=20&page=${this.state.currentPage}`;

    
    const res =  await request.get(queryString)
   
    

    await this.setState({ 
      data: res.body.results,
      totalPages: Math.ceil(res.body.count / 20),
      isLoading: false,
     })
     
     const params = new URLSearchParams(this.props.location.search);

     await params.set('search', this.state.search);
     await params.set('searchBy', this.state.searchBy);
     await params.set('page', this.state.currentPage);

          this.props.history.push('?' + params.toString())
  }

  getSearchChoice = async (e) => {
    const searchBy = e.target.value;
    if(searchBy !== 'pokemon'){
      const optionList = await getSearchOptions(searchBy)
      await this.setState({ searchBy, optionList })
    } else
     await this.setState({ searchBy, optionList: null })
  }
  getSortChoice = async (e) => {
    const sortBy = e.target.value;
    await this.setState({sortBy})
  }
  getSearchTerm = async (e) => {
    await this.setState({search:e.target.value})
  }

  formHandler = async (e) => {
    e.preventDefault();
    await this.setState({currentPage:1})
    await this.catchEm();
  }
 buttonClick = async () => {
   await this.catchEm();
 }

  render() {
    return (
      <div className='App'>
        <header className='App-header'><h1>Gotta Catch em all</h1></header>
        <div className='container'>
          <SearchBar 
            onSubmit={this.formHandler}
            getSearchTerm={this.getSearchTerm}
            getSearchChoice={this.getSearchChoice}
            getSortChoice={this.getSortChoice}
            searchBy={this.state.searchBy}
            sortBy={this.state.sortBy}
            search={this.state.search}
            optionList={this.state.optionList}
            />
          <Pokedex data={this.state.data}/>
        </div>
        
      </div>
    )
  }
}
