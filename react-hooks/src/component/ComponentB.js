import React,{useContext} from 'react'
import ComponentK from './ComponentK'
import { CountContext } from '../App'

function ComponentB() {
    const countContext = useContext(CountContext)
    return (
        <div>
            <ComponentK />
            ComponentB
            <button onClick={()=>countContext.countDispatch('increment')}>Increment (+1)</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>Decrement (-1)</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset (0)</button>
        </div>
    )
}

export default ComponentB
