import React, { useState , createContext } from 'react';

const CountContext = createContext()

function Example4(){
    const [ count , setCount ] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            <CountContext.Provider value={count}></CountContext.Provider>
        </div>
    )
}
export default Example4;
