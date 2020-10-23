import React, { Component } from 'react';
import Header from "./components/Header";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Home/>
        </div>
    );
  }
}

export default App;
