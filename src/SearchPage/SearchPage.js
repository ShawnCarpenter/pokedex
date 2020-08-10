import React, { Component } from 'react'
import request  from 'superagent';
import Pokedex from '../Pokedex/Pokedex';
import { getSearchOptions } from '../Utils';
import SearchBar from './SearchBar';


export default class SearchPage extends Component {
  
  state = {
    data: '',
    search: '',
    searchBy: 'pokemon',
    sortBy: 'pokemon',
    optionList: null,
    currentPage: 1,
    totalPages: 1,
  }

  componentDidMount = async () => {
    const params = new URLSearchParams(this.props.location.search);
    const searchBy = params.get('searchBy');
    const page = params.get('page');
    const search = params.get('search');
    const sortBy = params.get('sortBy')
    
    if(searchBy && page && search && sortBy) {
      await this.setState({
        searchBy: searchBy,
        currentPage:Number(page),
        search: search,
        sortBy: sortBy
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
    await params.set('sortBy', this.state.sortBy);
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
    await this.catchEm();
  }

  getSearchTerm = async (e) => {
    await this.setState({search:e.target.value})
    if(this.state.searchBy=== 'pokemon') {
      await this.setState({currentPage: 1})
      await this.catchEm();
    }
  }

  formHandler = async (e) => {
    e.preventDefault();
    await this.setState({currentPage: 1})
    await this.catchEm();
  }

  optionButtonClick = async (e) => {
    await this.setState({search: e.target.value, currentPage: 1})
    await this.catchEm();
  }

  pageButtonClick = async (e) => {
      const buttonClicked = e.target.value;
      switch (buttonClicked){
        case 'prev' :
          await this.setState({currentPage: Number(this.state.currentPage) - 1});
          break;
        case 'next' :
          await this.setState({currentPage: Number(this.state.currentPage) + 1})
          break;
        default :
          await this.setState({currentPage: Number(buttonClicked)})
      }
    await this.catchEm();
  } 

  render() {
    return (
      <div className='App'>
        <header className='App-header'><h1>Gotta Catch em all</h1></header>
        <div className='container'>
          <SearchBar 
            formHandler={this.formHandler}
            getSearchTerm={this.getSearchTerm}
            getSearchChoice={this.getSearchChoice}
            getSortChoice={this.getSortChoice}
            optionButtonClick={this.optionButtonClick}
            searchBy={this.state.searchBy}
            sortBy={this.state.sortBy}
            search={this.state.search}
            optionList={this.state.optionList}
            />
          <Pokedex 
            data={this.state.data}
            pageButtonClick={this.pageButtonClick}
            totalPages={this.state.totalPages}
            currentPage={this.state.currentPage}
          />
        </div>
        
      </div>
    )
  }
}
