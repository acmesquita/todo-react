import React, { Component } from 'react'
import PageHeard from '../template/pageHeard';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends Component{

    constructor(props){
        super(props)
        this.state = { description: '', list: [] }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({ ...this.state, description: event.target.value })
    }

    handleAdd(){
       console.log(this.state.description);
    }

    render(){
        return (
            <div>
                <PageHeard name='Tarefas' small='Cadastro'/>
                <TodoForm 
                handleAdd={this.handleAdd} 
                handleChange={this.handleChange} 
                description={this.state.description}/>
                <hr/>
                <TodoList />
            </div>
        )
    }
}