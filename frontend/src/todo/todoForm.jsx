import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import Button from '../template/button'
import { changeDescription, search, add } from './todoActions';

class TodoForm extends Component{
    
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }
    
    componentWillMount() {
        this.props.search()
    }

    keyHandler(e){

        const { add, search, description } = this.props 

        if (e.key === 'Enter'){
            e.shiftKey ? search() : add(description)
        }else if (e.key === 'Escape'){
            this.props.handleClear()
        }
    }
    
    render() {
        const { add, search, description } = this.props 

        return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control' 
                placeholder='Adicione ou busque um tarefa' 
                onChange={this.props.changeDescription}
                onKeyUp={this.keyHandler}
                value={this.props.description}
                />
            </Grid>
            <Grid cols='12 3 2'>
                <Button style="primary" icon="plus"
                    onClick={() => (add(description))}
                ></Button>
                <Button style="info" icon="search"
                    onClick={() => (search)}
                ></Button>
                <Button style="default" icon="close"
                    onClick={this.props.handleClear}
                ></Button>
            </Grid>
        </div>

        )
    }
}


const mapStateToprops = state => ({description: state.todo.description})
const mapDispatchToprops = dispatch => (bindActionCreators({changeDescription, search, add}, dispatch))

export default connect(mapStateToprops, mapDispatchToprops)(TodoForm)