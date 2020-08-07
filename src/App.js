import React, { Component } from 'react'
import { 
    BrowserRouter as Router,
    Route, 
    Switch,
} from 'react-router-dom'

import SearchPage from'./SearchPage'
import Details from './Details/Details'



export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={(routerProps) => <SearchPage {... routerProps} />}
                    />
                    <Route
                        path="/Details/:pokemon"
                        exact
                        render={(routerProps) => <Details {... routerProps} />}
                    />
                </Switch>
            </Router>
        )
    }
}
