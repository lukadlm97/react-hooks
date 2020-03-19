import React, { useState,useEffect } from 'react'

function HookCounterOne() {
    const initialCount = 0
    const [count,setCount] = useState(initialCount)

    useEffect(()=>{
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <button onClick={()=>setCount((prevValue)=>prevValue+1)}>You clicked {count} times</button>
        </div>
    )
}

export default HookCounterOne
