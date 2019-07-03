import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Box1 from './Components/Box1/Box1';
import Box2 from './Components/Box2/Box2';
import Box3 from './Components/Box3/Box3';
import Box4 from './Components/Box4/Box4';
import Box5 from './Components/Box5/Box5';
import Box6 from './Components/Box6/Box6';
import Box7 from './Components/Box7/Box7';
import Box8 from './Components/Box8/Box8';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Box1 />
        <Box2 />
        <Box3 />
        <Box4 />
        <Box5 />
        <Box6 />
        <Box7 />
        <Box8 />
      </div>
    );
  }
}

export default App;