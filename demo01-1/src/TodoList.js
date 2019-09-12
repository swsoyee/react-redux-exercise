import React, { Component } from 'react';
import { connect } from 'react-redux'

class TodoList extends Component {
    
    render() { 
        return ( 
        <div>
            <div>
                <input 
                    value={this.props.inputValue}
                    onChange={this.props.inputChange}/>
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

const dispatcherToProps = (dispatcher)=>{
    return {
        inputChange(e){
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatcher(action)
        }
    }
}
 
export default connect(stateToProps, dispatcherToProps)(TodoList);