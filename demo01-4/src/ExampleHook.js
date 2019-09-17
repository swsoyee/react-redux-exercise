import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function Example(){
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)
        return ()=>{
            console.log('===========')
        }
    }, [count])
    return ( 
        <div>
            <p>You click {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>

            <Router>
                <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/list">List</Link></li>
                </ul>
                <Route path="/" exact component={Index}></Route>
                <Route path="/list/" exact component={List}></Route>
            </Router>
        </div> 
    );
}

function Index() {
    useEffect(()=>{
        console.log('useEffect=>Index')
        return ()=>{
            console.log('Leaving Index')
        }
    }, [])
    return <h2>Infinity</h2>
}

function List() {
    useEffect(()=>{
        console.log('useEffect=>List')
    })
    return <h2>List-Page</h2>
}

export default Example