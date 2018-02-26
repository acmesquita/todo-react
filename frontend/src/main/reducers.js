import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [
            {
                _id:1,
                description: 'Estudar Rails',
                done: false
            },
            {
                _id:2,
                description: 'Estudar Ruby',
                done: true
            },
            {
                _id:3,
                description: 'Comprar passagem para Manila.',
                done: false
            },
        ]
    })
})

export default rootReducer