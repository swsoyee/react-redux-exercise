import React, { Component } from 'react';
import store from './store'
import {getTodoList, changeInputAction, deleteItemAction, addItemAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state=store.getState()
        this.changeInputValue=this.changeInputValue.bind(this)
        this.clickButton=this.clickButton.bind(this)
        this.deleteItem=this.deleteItem.bind(this)
        this.storeChange=this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }

    render() {
        return(
            <TodoListUI 
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                clickButton={this.clickButton}
                list={this.state.list}
                deleteItem={this.deleteItem}
            />
        )
    }

    componentDidMount(){
        const action = getTodoList()
        store.dispatch(action)
    }

    changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    storeChange(){
        this.setState(store.getState())
    }

    clickButton(){
        const action = addItemAction()
        store.dispatch(action)
    }

    deleteItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}
 
export default TodoList;