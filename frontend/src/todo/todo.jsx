import React, { Component } from 'react'
import axios from 'axios'

import PageHeard from '../template/pageHeard';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component{

    constructor(props){
        super(props)
        this.state = { description: '', list: [] }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)      
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)     
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)     
        this.refresh = this.refresh.bind(this)
        this.refresh()
    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
        .then(resp => this.setState({...this.state, description: '', list: resp.data}))
    }

    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done:false})
        .then(this.refresh())
    }

    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done:true})
            .then(this.refresh())
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(this.refresh())
    }

    handleChange(event){
        this.setState({ ...this.state, description: event.target.value })
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL, {description})
            .then(this.refresh())
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
                <TodoList 
                list={this.state.list} 
                handleRemove={this.handleRemove}
                handleMarkAsDone={this.handleMarkAsDone}
                handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
}