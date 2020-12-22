import React, {useState} from "react";

function Room() {
  function updateLit() {
    console.log("Button Clicked")
    setLit(!isLit);
  }
  const [isLit, setLit] = useState(true);
  return (    
    <div>
        This room is {isLit? "Lit" : "dark"}
        <br/>
        <button onClick={updateLit}>Light Switch</button>
    </div>
  );
}

export default Room;
