import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './Pages/Index'
import Video from './Pages/Video'

function AppRouter(){
    return(
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>First Level Navigator</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/video">Video</Link></li>
                        <li><Link to="">Workplace</Link></li>
                    </ul>
                </div>
                <div className="rightMain">
                    <Route path="/" exact component={Index} />
                    <Route path="/video" component={Video} />
                </div>
            </div>
        </Router>
    )
}
 
export default AppRouter;