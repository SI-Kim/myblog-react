import React from "react";
import "./styles/App.css";
import { Header, Footer, Sidebar, Main } from "./layouts/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
