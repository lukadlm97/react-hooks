import React,{useReducer} from 'react';
import './App.css';
import ComponentA from './component/ComponentA';
import ComponentB from './component/ComponentB'
// import CounterThree from './component/CounterThree';
// import CounterOne from './component/CounterOne';
// import ComponentC from './component/ComponentC';
// import DataFatching from './component/DataFatching';
// import IntervalHookCounter from './component/IntervalHookCounter';
// import MouseContainer from './component/MouseContainer';
// import HookMouse from './component/HookMouse';
// import HookCounterOne from './component/HookCounterOne';
// import HookCounterFour from './component/HookCounterFour';
// import HookCounterThree from './component/HookCounterThree';
// import HookCounterTwo from './component/HookCounterTwo';
// import HookCounter from './component/HookCounter';
// import ClassCounter from './component/ClassCounter';
// import CounterTwo from './component/CounterTwo'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()

const initialState = 0
const reducer = (state,action) => {

    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
         default:
            return state
    }

}

function App() {
  const [count,dispatch] = useReducer(reducer,initialState)

  return (
    <div className="App">
      {/* <CounterThree /> */}
      <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
        Count - {count}
        <ComponentA />
        <ComponentB />
      </CountContext.Provider>


      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <UserContext.Provider value={'Luka'}>
        <ChannelContext.Provider value={'lukadlm97'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFatching /> */}
      {/* <IntervalHookCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <HookCounterOne /> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
     {/* <ClassCounter /> */}
    </div>
  );
}

export default App;
