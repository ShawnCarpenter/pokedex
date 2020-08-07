import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className='searchBar'>
                <div className='searchBox' >
                    <p>Search By 
                       <select onChange={this.props.getSearchChoice }>
                          <option value="pokemon" defaultValue>Name</option>
                          <option value="type">Type</option>
                          <option value="ability">Ability</option>
                          <option value="shape">Shape</option>
                          <option value="eggGroup">Egg Group</option>
                      </select>
                    </p>
                    <p>Sort By 
                       <select onChange={this.props.getSortBy}>
                          <option value="pokemon" defaultValue>Name</option>
                          <option value="type">Type</option>
                          <option value="ability">Ability</option>
                      </select>
                    </p>
                    <input onChange={this.props.getSearchTerm}></input>
                    <button onClick={this.props.catchEm}>CatchEm </button>
                </div>
                <ul>
                  {
                    this.props.optionList && this.props.optionList.map( option => <li key={option}>{option}</li>)
                  }
                </ul>
            </div>
        )
    }
}
