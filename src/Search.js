import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <input onChange={this.props.onChange}></input>
                <button onClick={this.props.onClick}>CatchEm </button>
                
            </div>
        )
    }
}
