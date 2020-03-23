import React,{useContext} from 'react'
import ComponentJ from './ComponentJ'
import { CountContext } from '../App'


function ComponentA() {
    const countContext =  useContext(CountContext)
    return (
        <div>
            <ComponentJ />
            ComponentA
            <button onClick={()=>countContext.countDispatch('increment')}>Increment (+1)</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>Decrement (-1)</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset (0)</button>
        
        </div>
    )
}

export default ComponentA
