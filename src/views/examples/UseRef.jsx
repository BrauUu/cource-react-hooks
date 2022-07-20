import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {

    const [value, setValue] = useState("")
    const [otherValue, setOtherValue] = useState("")
    const [mergedValues, setMergedValues] = useState("")
    
    const count = useRef(0)
    const input = useRef()
    const otherInput = useRef()

    useEffect(() => {
        count.current++;
        otherInput.current.focus()
    }, [value])

    useEffect(() => {
        count.current++;
        input.current.focus()
    }, [otherValue])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <div className="center">
                <span className="text">Inputs Mergeados:<span className="text red">{mergedValues}</span></span>
            </div>
            <SectionTitle
                title="Exercício #01"
            />
            <div className="center">
                <span className="text">
                    Contador de Renderização: <span className="text red">{count.current}</span>
                </span>
                <input 
                    type="text" 
                    className="input" 
                    value={value} 
                    onChange={event => {
                        setValue(event.target.value)
                        setMergedValues(mergedValues + event.target.value[event.target.value.length - 1])
                    }}
                    ref={input}
                    />
            </div>
            <SectionTitle
                title="Exercício #02"
            />
            <div className="center">
                <input 
                    type="text" 
                    className="input" 
                    value={otherValue} 
                    onChange={event => {
                        setOtherValue(event.target.value)
                        setMergedValues(mergedValues + event.target.value[event.target.value.length - 1])
                    }}
                    ref={otherInput}
                    />
            </div>
        </div>
    )
}

export default UseRef
