import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

function calcFactorial(n) {

    if (n < 0 || isNaN(n))
        return -1
    else if (n == 0)
        return 1
    else
        return calcFactorial(n - 1) * n;
}

const UseEffect = (props) => {

    const [value, setValue] = useState(0)
    const [factorial, setFactorial] = useState()
    const [evenOrOdd, setEvenOrOdd] = useState()

    useEffect(() => {
        setFactorial(calcFactorial(value))
        setEvenOrOdd( () => value % 2 === 0 ? "Par" : "Ímpar")
    }, [value])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle
                title="Exercicío #01"
            />
            <div className='center'>
                <span className='text'>Fatorial:</span>
                <span className='text red'>{factorial < 0 ? 'Inválido' : factorial}</span>
                <input
                    type="number"
                    className="input"
                    value={value}
                    onChange={
                        event => setValue(event.target.value)
                    }
                />
            </div>
            <SectionTitle
                title="Exercicío #02"
            />
            <div className="center">
                <span className='text'>O valor {value} é:</span>
                <span className='text red'>{evenOrOdd}</span>
            </div>
        </div>
    )
}

export default UseEffect
