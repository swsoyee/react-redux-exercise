import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './Pages/Index'
import Video from './Pages/Video'
import Workplace from './Pages/Workplace'

function AppRouter(){
    let routerConfig = [
        {path: '/', title: 'Home', exact: true, component: Index},
        {path: '/video', title: 'Video', exact: false, component: Video},
        {path: '/workplace', title: 'Workplace', exact: false, component: Workplace},
    ]
    return(
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>First Level Navigator</h3>
                    <ul>
                        {
                            routerConfig.map((item, index)=>{
                                return(<li key={index}><Link to={item.path}>{item.title}</Link></li>)
                            })
                        }
                    </ul>
                </div>
                <div className="rightMain">
                    {
                        routerConfig.map((item, index)=>{
                            return(<Route key={index} path={item.path} exact={item.exact} component={item.component} />)
                        })
                    }
                </div>
            </div>
        </Router>
    )
}
 
export default AppRouter;