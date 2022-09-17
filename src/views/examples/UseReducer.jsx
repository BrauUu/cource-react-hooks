import React from 'react'
import { useState } from 'react';
import { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle'
import { InitialState, reducer, addN } from '../../store/config'

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, InitialState);
    const [numberN, setNumberN] = useState(1)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                { state.user ? 
                    <span className='text'>
                        {state.user.name }
                    </span>
                    :
                    <span className='text'>
                        No user
                    </span>}
                <span className="text">
                    { state.number }
                </span>
                <div>
                    <button className="btn" onClick={() => addN(dispatch, 2)}>
                        +2
                    </button>
                    <button className="btn" onClick={() => dispatch({type: 'multiply7'})}>
                        x7
                    </button>
                    <button className="btn" onClick={() => dispatch({type: 'divide25'})}>
                        /25
                    </button>
                    <button className="btn" onClick={() => dispatch({type: 'parseToInt'})}>
                        Parse to Int
                    </button>
                    <button className="btn" onClick={() => addN(dispatch, Number(numberN))}>
                        +N
                    </button>
                    <button className="btn" onClick={() => dispatch({type: 'login', payload: {name: 'brau'}})}>
                        Login
                    </button>
                </div>
                <div>
                    <input 
                        type='text' 
                        value={numberN}
                        className="input"
                        onChange={(e) => setNumberN(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default UseReducer
