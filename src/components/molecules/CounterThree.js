import React, { useState } from 'react'
import Button from "../atoms/Button";

const CounterThree = () => {

    const [ count, setCount ] = useState(() => {
        return 4
    })

    function decreaseCount() {
        setCount(prevCount => prevCount - 1 )
    }

    function increaseCount() {
        setCount(prevCount => prevCount + 1 )
    }

    return (
        <>
            <p>{ count }</p>
            <Button onClick={decreaseCount}>Decrease</Button>
            <Button onClick={increaseCount}>Increase</Button>
        </>
    )
}

export default CounterThree