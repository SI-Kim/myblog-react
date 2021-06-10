import React from "react";
import "./styles/App.css";
import { Header, Footer, Sidebar, Main, WhiteSpace } from "./layouts/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Main />
      <WhiteSpace />
      <Footer />
    </div>
  );
}

export default App;
