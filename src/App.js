import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import  React, { useState, useEffect } from 'react';

function App() {

  const [text, setText] = useState("");

  useEffect(() => {
    Axios.get("/api/home").then((response) => {
      console.log(response);
      console.log(response.data);
      if (response.date) {
        setText(response.data);
        alert(text);
      } else {
        alert("fail to load");
      }
    });
  }, []);
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          text: {text}
        </p>
      </header>
    </div>
  );
}

export default App;
