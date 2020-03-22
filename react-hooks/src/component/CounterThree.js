import React, { useReducer } from 'react'


const initialState = 0
const reducer = (state, action) => {

    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }

}

function CounterThree() {


    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)


    return (
        <div>
            <div>
                <div>Count One: {count}</div>
                <button onClick={() => dispatch('increment')}>Increment (+1)</button>
                <button onClick={() => dispatch('decrement')}>Decrement (-1)</button>
                <button onClick={() => dispatch('reset')}>Reset (0)</button>
            </div>
            <div>
                <div>Count Two : {countTwo}</div>
                <button onClick={() => dispatchTwo('increment')}>Increment (+1)</button>
                <button onClick={() => dispatchTwo('decrement')}>Decrement (-1)</button>
                <button onClick={() => dispatchTwo('reset')}>Reset (0)</button>
            </div>
        </div>
    )
}

export default CounterThree
