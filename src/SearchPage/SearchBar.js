import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        console.log(this.props)
        // const {
        //     onSubmit,

        // } = this.props
        return (
            <div className='searchBar'>
                <div className='searchBox' >
                    <form onSubmit={this.props.onSubmit}>
                    <p>Search By 
                       <select onChange={this.props.getSearchChoice} selected={this.props.searchBy}>
                          <option value="pokemon" >Name</option>
                          <option value="type">Type</option>
                          <option value="ability">Ability</option>
                          <option value="shape">Shape</option>
                          <option value="eggGroup">Egg Group</option>
                      </select>
                    </p>
                    <p>Sort By 
                       <select onChange={this.props.getSortChoice} selected={this.props.sortBy}>
                          <option value="pokemon" >Name</option>
                          <option value="type">Type</option>
                          <option value="ability">Ability</option>
                      </select>
                    </p>
                    <input onChange={this.props.getSearchTerm} defaultValue={this.props.search}></input>
                    <button type="submit" onClick={this.props.onSubmit}>CatchEm </button>
                    </form>
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
