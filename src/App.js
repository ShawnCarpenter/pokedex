import React, { Component } from 'react'
import request from 'superagent';
import Pokedex from './Pokedex';
import Search from './Search';


export default class App extends Component {
  state = {
    data: '',
    search: '',
  }


  catchEm = async () => {
    const data =  await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.search}&perPage=1000`)
    this.setState({data: data.body.results})
    console.log(this.state.data)
  }

  searchParams = (e) => {
    this.setState({search:e.target.value})
  }


  render() {
    
    return (
      <div>
        <Search onClick={this.catchEm} onChange={this.searchParams}/>
        <Pokedex data={this.state.data}/>
      </div>
    )
  }
}
