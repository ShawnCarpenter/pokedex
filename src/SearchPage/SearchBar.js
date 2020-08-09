import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
    render() {
      
        return (
            <div className='searchBar'>
                <div className='searchBox' >
                    <form onSubmit={this.props.formHandler}>
                    <p>Search By 
                       <select onChange={this.props.getSearchChoice} value={this.props.searchBy}>
                          <option value="pokemon" >Name</option>
                          <option value="type">Type</option>
                          <option value="ability">Ability</option>
                          <option value="shape">Shape</option>
                          <option value="eggGroup">Egg Group</option>
                      </select>
                    </p>
                    <p>Sort By 
                       <select onChange={this.props.getSortChoice} value={this.props.sortBy}>
                          <option value="pokemon" >Name</option>
                          <option value="type">Type</option>
                          <option value="ability_1">Ability 1</option>
                          <option value="ability_2">Ability 2</option>
                          <option value="attack">Attack</option>
                          <option value="color_1">Color 1</option>
                      </select>
                    </p>
                    <input onChange={this.props.getSearchTerm} defaultValue={this.props.search}></input>
                    <button type="submit" onClick={this.props.onSubmit}>CatchEm </button>
                    </form>
                </div>
                <ul className='optionList'>
                  {
                    this.props.optionList && this.props.optionList.map( option => <li key={option}>{option}</li>)
                  }
                </ul>
            </div>
        )
    }
}
