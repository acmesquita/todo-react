const INITIAL_STATE = {
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
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPION_CHANGED':
            return { ...state, description: action.payload}
        default:
            return state
    }
}

