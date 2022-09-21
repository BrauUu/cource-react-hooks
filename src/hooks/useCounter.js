import React, { useState } from 'react';

export default function useCounter(initialValue = 1) {

    const [count, setCount] = useState(initialValue);

    function inc(){
        setCount(count + 1)
    }

    function dec(){
        setCount(count - 1)
    }

    return [count, inc, dec]
}