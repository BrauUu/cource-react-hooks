import { reducer } from './reducers'
import { addN } from './actions/index'

const InitialState = {
    number: 0,
    other: '...'
};

export {
    InitialState,
    reducer,
    addN
}