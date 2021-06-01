import React from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Body from "./components/Body";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (

    <div className="App">
    <Wrapper>
      <Header />
      <Nav />
      <Main />
      <Body />
    </Wrapper>
    </div>
  );
}

export default App;
