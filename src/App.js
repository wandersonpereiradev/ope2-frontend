import React from "react";
import Routes from './routes';

console.error = (error) => error.apply;
console.warn = (warn) => warn.apply;

function App(){
  return(
    <div>
      <Routes/>
    </div>
  )
}

export default App;