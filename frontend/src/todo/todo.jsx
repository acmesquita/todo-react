import React, { Component } from 'react'
import PageHeard from '../template/pageHeard';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends Component{

    constructor(props){
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd(){
        console.log(this);
    }

    render(){
        return (
            <div>
                <PageHeard name='Tarefas' small='Cadastro'/>
                <TodoForm handleAdd={this.handleAdd}/>
                <hr/>
                <TodoList />
            </div>
        )
    }
}