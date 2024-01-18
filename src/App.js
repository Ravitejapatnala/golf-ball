import React, { useState } from "react";
import "./App.css";

function App() {

  const[leftPosition, setLeftPosition]= useState(0)

  function handleBall(e){
    if(e.key==='ArrowRight')
    {
      setLeftPosition(leftPosition+5)
    }
  }

  const[showBall, setShowBall]= useState(false);
  return (
    <div className="App" onKeyDown={handleBall}>
      <button onClick={()=>setShowBall(!showBall)}>{showBall? <div style={{"position": "absolute", "left": `${leftPosition}px`}} className="ball"></div> :"start"}</button>
    </div>
  )
}

export default App;
