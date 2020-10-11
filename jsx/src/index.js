//special

//DIFERENCIAS CON HTML
//   <button style=" background-color: blue; color: white>  Submit  </button>
//   <label class="label" for="name">Enter name:</label>
//   {} hace referencia a una variable javaScript
//   NOO!   const buttonText = {text:'click me'}; con javaScript OBJETCTS se arregla ponie do .buttonText al lado de la etiqueta

// STEPS
// Import the react and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// function getButtonText() {
//   return "Click on me!";
// }

// Create a react component
const App = function() {
  //  return <div> Hi there!</div>; primer ej
  const buttonText = {text:'Click Me!'};
  const labelText = 'Enter name:';

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />

      <button style={{ backgroundColor: 'blue', color: 'white'}}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
