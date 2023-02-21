import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
      <p>I am learning React. My life is getting better.</p>

      <h1 data-ns-test='project-name' id='project-name'> Digital Vehicle Fuel Level Indicator </h1>

      <p data-ns-test='project-description' id='project-description'> In our project the main blocks are micro controller unit, fuel level sensor and LCD display unit. The fuel level detection circuit is used to detect the level of the fuel in the tank; here sensors are placed at certain places to find out the fuel level and the signals are sent to the micro controller unit for further operations. </p>
      
    </div>
  )
}


export default App;
