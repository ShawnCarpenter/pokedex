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
    const data =  await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.search}&page=3&perPage=27`)
    this.setState({data: data.body.results})
  }

  searchParams = (e) => {
    this.setState({search:e.target.value})
    console.log(this.state)
    this.catchEm();
  }

  componentDidMount = async () => {
    this.catchEm();
    // const typeData = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex/types')
    // this.setState({typeData:typeData.body})
  }
  render() {
    
    return (
      <div className='App'>
        <header className='App-header'><h1>Gotta Catch em all</h1></header>
        <div className='container'>
          <Search typeList={this.state.typeData} onClick={this.catchEm} onChange={this.searchParams} />
          <Pokedex data={this.state.data}/>
        </div>
        
      </div>
    )
  }
}
