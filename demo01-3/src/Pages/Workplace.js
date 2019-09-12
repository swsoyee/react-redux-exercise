import React from 'react';
import {Route, Link} from 'react-router-dom'
import Money from './workplace/Money'
import Getup from './workplace/Getup'

function Video(){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/workplace/money">Money</Link></li>
                    <li><Link to="/workplace/getup">Get up</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>Workplace</h3></div>
                <Route path="/workplace/money" component={Money}></Route>
                <Route path="/workplace/getup" component={Getup}></Route>
            </div>
        </div>
    )
}

export default Video