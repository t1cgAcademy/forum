import React, { Component } from 'react';
import Header from './components/header/header';
import History from './components/history/history';
import Thread from './components/thread/thread';
import Post from './components/post/post';
import './App.css';

// POST STURCTURE
// {
//   timestamp: ,
//   author: ,
//   summary: ,
//   content: ,
// },

// generate some generic data
const history101 = [
  {
    timestamp: 0,
    author: "Phil",
    summary: "Final Project?",
    content: "Has the final project been post yet.",
  },
  {
    timestamp: 1,
    author: "Kruskal",
    summary: "Is class cancelled?",
    content: "There is a lot of snow on the roads",
  },
  {
    timestamp: 2,
    author: "Tony",
    summary: "Test Summary",
    content: "This is a very long post. It is specifically longer than 50 characters to prove a point.",
  },
];

const history201 = [
  {
    timestamp: 0,
    author: "Phil",
    summary: "Welcome to web developement 201",
    content: "THis is an overview of the course",
  },
  {
    timestamp: 1,
    author: "Kruskal",
    summary: "Test Summary for 201",
    content: "Test Test Test Test Test Test Test Test",
  },
]

const history301 = [
  {
    timestamp: 0,
    author: "Phil",
    summary: "Welcome to dev ops 301",
    content: "THis is an overview of the course",
  },
  {
    timestamp: 1,
    author: "Kruskal",
    summary: "Test Summary for 301",
    content: "Test Test Test Test Test Test Test Test",
  },
]

const courses = [
  {
    name: "101",
    history: history101,
  },
  {
    name: "201",
    history: history201,
  },
  {
    name: "301",
    history: history301,
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    // initialize necessary variables
    this.state = {
      index: 0,
      history: history101,
      post: {},
      headerOpen: false,
    };
  }

  toggleHeader = () => {
    this.setState({
      headerOpen: !this.state.headerOpen,
    })
  }

  handleClassChange = e => {
    console.log(e.target.name, e.target.value)

    let newCourse = courses.find( course => {
      return course.name === e.target.value
    })

    this.setState({
      history: newCourse.history,
    })
  }

  // set state so the selected post becomes the current post
  handleHistoryClick = i => {
    this.setState({
      index: i,
      openPost: false
    });
  };

  // display form for a new post
  newPost = () => {
    this.setState({
      openPost: true,
      openComment: false
    });

  };

  // remove all data form form
  clearPost = () => {
    this.setState({
      post: {},
      openPost: false
    });
  };

  // handle a form being editted
  handlePostChange = e => {
    var p = Object.assign({}, this.state.post);
    p[e.target.name] = e.target.value;
    console.log('setting state to ', p);
    this.setState({
      post: p
    });
  };

  // handle a form being submitted
  submitNewPost = () => {
    console.log('submitting');
    var p = this.state.post;
    p.date = new Date();
    p.name = 'Anon';
    p.replies = [];
    var h = this.state.history.slice();
    h.unshift(p);

    this.setState({
      history: h,
      openPost: false,
      post: null
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Header headerOpen={this.state.headerOpen} toggleHeader={this.toggleHeader} handleClassChange={this.handleClassChange}/>
          <div className="row " id="row">
            <History history={this.state.history} handleHistoryClick={this.handleHistoryClick} newPost={this.newPost}/>
            {this.state.openPost && 
              <Post handlePostChange={this.handlePostChange} clearPost={this.clearPost} submitNewPost={this.submitNewPost}/>
            }
            {!this.state.openPost && 
              <Thread head={this.state.history[this.state.index]}/>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;