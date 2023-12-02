/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
import {useState} from "react"
import  ReactDOM  from "react-dom/client"

function ColorPicker(){

  const [color, setColor] = useState("red");

  const changeColor= () => {
    setColor(color === "red" ? "blue" : "red");
  };

  return (
    <div>

      <h1> My favorite color is {color}!</h1>
       
      
      <button onClick={changeColor}>Change Color</button>
    </div>

  );

}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ColorPicker />);
