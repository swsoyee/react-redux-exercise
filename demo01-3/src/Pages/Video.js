import React from 'react';
import {Route, Link} from 'react-router-dom'
import ReactPage from './video/ReactPage'
import FlutterPage from './video/Flutter'
import VuePage from './video/Vue'

function Video(){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/video/reactpage">React</Link></li>
                    <li><Link to="/video/flutterpage">Flutter</Link></li>
                    <li><Link to="/video/vuepage">Vue</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>Video</h3></div>
                <Route path="/video/reactpage" component={ReactPage}></Route>
                <Route path="/video/flutterpage" component={FlutterPage}></Route>
                <Route path="/video/vuepage" component={VuePage}></Route>
            </div>
        </div>
    )
}

export default Video