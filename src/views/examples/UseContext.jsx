import React, { useContext } from 'react'
import { useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import { DataContext } from '../../data/DataContext'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {

    //Ex#01

    const { state, setState } = useContext(DataContext)

    function changeNumber(newNumber) {
        setState({
            ...state,
            number: newNumber
        })
    }

    //Ex#02

    const { number, text, setNumber, setText } = useContext(AppContext)

    useEffect(() => {
        if(number >= 15)
            setText('Eita!')
        if(number < 15)
            setText('Normal!')
    }, [number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercício #01"/>
                <div className="center">
                    <span className="text">
                        {state.number}
                    </span>
                </div>
                <div className="center">
                    <button
                        className="btn"
                        onClick={() => changeNumber(state.number + 1)}
                    >
                        +1
                    </button>
                    <button
                        className="btn"
                        onClick={() => changeNumber(state.number - 1)}
                    >
                        -1
                    </button>
                </div>
            
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(number - 1)}>
                        -1
                    </button>
                </div>
                <div>
                    <button className="btn" onClick={() => setNumber(number + 1)}>
                        +1
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
