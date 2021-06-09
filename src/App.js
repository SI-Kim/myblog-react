import React, { useState, useEffect } from "react";
import Axios from "axios";

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
    <div>
      <header>
        <p>text: {text}</p>
      </header>
    </div>
  );
}

export default App;
