import React from 'react';
import './App.css';
import ComponentC from './component/ComponentC';
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


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {


  return (
    <div className="App">
      <UserContext.Provider value={'Luka'}>
        <ChannelContext.Provider value={'lukadlm97'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
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
