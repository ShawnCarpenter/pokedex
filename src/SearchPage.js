import React, { Component } from 'react'
import request from 'superagent';
import Pokedex from './Pokedex';
import Search from './Search';


export default class SearchPage extends Component {
  state = {
    data: '',
    search: '',
  }


  catchEm = async () => {
    const data =  await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.search}&perPage=100`)
    this.setState({data: data.body.results})
  }

  searchParams = (e) => {
    this.setState({search:e.target.value})
    // console.log(this.state)
    this.catchEm();
  }

  componentDidMount = async () => {
    this.catchEm();
  }
  render() {
    
    return (
      <div className='App'>
        <header className='App-header'><h1>Gotta Catch em all</h1></header>
        <div className='container'>
          <Search  onClick={this.catchEm} onChange={this.searchParams} />
          <Pokedex data={this.state.data}/>
        </div>
        
      </div>
    )
  }
}
