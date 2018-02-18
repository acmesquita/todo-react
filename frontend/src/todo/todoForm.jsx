import React from 'react'

import Grid from '../template/grid'
import Button from '../template/button'

export default props => (
    <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            <input id='description' className='form-control' 
            placeholder='Adicione ou busque um tarefa' 
            onChange={props.handleChange}
            value={props.description}
            />
        </Grid>
        <Grid cols='12 3 2'>
            <Button style="primary" icon="plus"
                onClick={props.handleAdd}
            ></Button>
        </Grid>
    </div>
)