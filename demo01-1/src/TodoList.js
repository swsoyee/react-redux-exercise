import React from 'react';
import { connect } from 'react-redux'

const TodoList = (props)=>{
    let { inputValue, inputChange, clickButton, list, deleteItem } = props
    return ( 
        <div>
            <div>
                <input 
                    value={inputValue}
                    onChange={inputChange}/>
                <button onClick={clickButton}>Submit</button>
            </div>
            <ul>
                {
                    list.map((item, index)=>{
                        return (<li key={index} onClick={deleteItem.bind(this, index)}>{item}</li>)
                    })
                }
            </ul>
        </div> 
    );
}

const stateToProps = (state)=>{
    return {
        inputValue: state.inputValue,
        list: state.list
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
        },
        clickButton(){
            let action = {
                type: 'add_item'
            }
            dispatcher(action)
        },
        deleteItem(index){
            let action = {
                type: 'delete_item',
                index: index
            }
            dispatcher(action)
        }
    }
}
 
export default connect(stateToProps, dispatcherToProps)(TodoList);