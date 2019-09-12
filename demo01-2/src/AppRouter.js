import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Index(){
    return <h2>InfinityLoop</h2>
}

function List(){
    return <h2>List-page</h2>
}

function AppRouter(){
    return (
        <Router>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/list/">List</Link></li>
            </ul>
            <Route path="/" exact component={Index}/>
            <Route path="/list" component={List}/>
        </Router>
    )
}

export default AppRouter