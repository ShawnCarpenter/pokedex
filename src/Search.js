import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div className='searchBar'>
                <div className='searchBox' >
                    <p>Search By 
                        <select onChange={this.props.SearchBy}>
                            <option value="pokemon">Name</option>
                            <option value="type">Type</option>
                            <option value="ability">Ability</option>
                        </select>
                        </p>
                    <input onChange={this.props.onChange}></input>
                    <button onClick={this.props.onClick}>CatchEm </button>
                </div>
            </div>
        )
    }
}
