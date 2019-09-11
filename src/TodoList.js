import React, { Component } from 'react';
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import store from './store'
import {changeInputAction, deleteItemAction, addItemAction} from './store/actionCreators'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state=store.getState()
        this.changeInputValue=this.changeInputValue.bind(this)
        this.clickButton=this.clickButton.bind(this)
        this.storeChange=this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }

    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        placeholder={this.state.inputValue}
                        style={{width:'250px', marginRight:'10px'}}
                        onChange={this.changeInputValue}
                        value={this.state.inputValue}
                    />
                    <Button type="primary"
                        onClick={this.clickButton}>Add</Button>
                </div>
                <div style={{marginTop:'10px', width:'250px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index)=>(<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}
                    />
                </div>
            </div>
         );
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