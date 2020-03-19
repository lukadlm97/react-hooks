import React, { useState,useEffect } from 'react'

function HookCounterOne() {
    const initialCount = 0
    const [count,setCount] = useState(initialCount)
    const [name,setName] = useState('')
    useEffect(()=>{
        console.log('Updating document title')
        document.title = `You clicked ${count} times`
    },[count])

    return (
        <div>
            <input type='text' value={name} onChange={e=>setName(e.target.value)} />
            <button onClick={()=>setCount((prevValue)=>prevValue+1)}>You clicked {count} times</button>
        </div>
    )
}

export default HookCounterOne
