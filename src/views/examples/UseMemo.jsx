import React, { useState, useEffect, useMemo } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseMemo = (props) => {

    const [state01, setState01] = useState(0)
    const [state02, setState02] = useState(0)
    const [state03, setState03] = useState(0)



    const sumResult = useMemo(() => {
        sum(state01, state02);
    }, [state01, state02])

    function sum(val1, val2) {
        const future = Date.now() + 1000
        while( Date.now() < future) {}
        return val1 + val2;  
    }


    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <div className="center">
                <input
                    type="text"
                    className="input"
                    value={state01}
                    onChange={event => {
                        setState01(Number(event.target.value))
                    }}
                />
                <input
                    type="text"
                    className="input"
                    value={state02}
                    onChange={event => {
                        setState02(Number(event.target.value))
                    }}
                />
                <input
                    type="text"
                    className="input"
                    value={state03}
                    onChange={event => {
                        setState03(Number(event.target.value))
                    }}
                />
                <span className="text">{sumResult}</span>
            </div>
        </div>
    )
}

export default UseMemo
