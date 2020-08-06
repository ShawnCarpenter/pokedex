import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    
    render() {

        console.log(this.props)
        return (
            <div className='searchBar'>
                <div className='searchBox' >
                    <p>Search By Name:</p>
                    <input onChange={this.props.onChange}></input>
                    <button onClick={this.props.onClick}>CatchEm </button>
                </div>
            </div>
        )
    }
}
