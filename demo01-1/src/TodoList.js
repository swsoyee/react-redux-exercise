import React, { Component } from 'react';
import { connect } from 'react-redux'

class TodoList extends Component {
    
    render() { 
        return ( 
        <div>
            <div>
                <input value={this.props.inputValue}/>
                <button>Submit</button>
            </div>
            <ul>
                <li>InfinityLoop</li>
            </ul>
        </div> );
    }
}

const stateToProps = (state)=>{
    return {
        inputValue: state.inputValue
    }
}
 
export default connect(stateToProps, null)(TodoList);