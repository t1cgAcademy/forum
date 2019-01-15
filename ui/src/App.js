import React, { Component } from 'react';
import Header from './components/header/header';
import History from './components/history/history';
import Post from './components/post/post';
import './App.css';

// generate some generic data
let history = [];

class App extends Component {
  constructor(props) {
    super(props);
    // initialize necessary variables
    this.state = {};
  }

  // set state so the selected post becomes the current post
  handleHistoryClick = i => {
    // TODO
  };

  // display form for a new post
  newPost = () => {
    // TODO
  };

  // remove all data form form
  clearPost = () => {
    // TODO
  };

  // handle a form being editted
  handlePostChange = e => {
    // TODO
  };

  // handle a form being submitted
  submitNewPost = () => {
    // TODO
  };

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Header />
          <div className="row " id="row">
            <History/>
            <Post/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
