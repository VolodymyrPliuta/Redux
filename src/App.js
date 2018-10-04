import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post'
import Postform from './components/Postform'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Postform />
        <hr />
        <Post />
      </div>
    );
  }
}

export default App;
