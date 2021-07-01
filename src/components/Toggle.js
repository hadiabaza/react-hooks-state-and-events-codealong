import React from "react";
import { useState } from "react";

// // always import {useState} hook from "react"

// // set up a function that returns the button, Toggle in this case
// // set up state, line 12
// // set up even listener in button component that

// function Toggle() {
//   const [isOn, setIsOn] = useState(false);

//   function handleClick() {
//     return setIsOn((isOn) => !isOn);
//   }

//   const color = isOn ? "red" : "white";

//   return (
//     <button style={{ background: color }} onClick={handleClick}>
//       {isOn ? "ON" : "OFF"}
//     </button>
//   );
// }

// export default Toggle;

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "Red" : "white";

  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
