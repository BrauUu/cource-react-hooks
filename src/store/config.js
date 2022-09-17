export const InitialState = {
    number: 0,
    other: '...'
};

export function reducer(state, action) {

    const { payload }  = action

    switch(action.type) {
        case 'multiply7' :
            return {...state, number: state.number * 7}
        case 'divide25' :
            return {...state, number: state.number / 25}
        case 'parseToInt':
            return {...state, number: parseInt(state.number)} 
        case 'addN' : 
            return {...state, number: state.number + payload.number}
        case 'login':
            return {...state, user: {name: payload.name, token: 'xxxxx'}}
        default:
            return state
    };

};