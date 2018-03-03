import React, { Component } from 'react'

import PageHeard from '../template/pageHeard';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default props => (
    <div>
        <PageHeard name='Tarefas' small='Cadastro'/>
        <TodoForm />
        <hr/>
        <TodoList />
    </div>
)