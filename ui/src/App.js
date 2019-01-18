import React, { Component } from 'react';
import Post from './components/post/post';
import History from './components/history/history';
import Thread from './components/thread/thread';
import './App.css';
import classList from './assets/data/data';
import Footer from './components/footer/footer';
import NavBar from './components/navbar/navBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      headerDropDown: false,
      class: '101',
      openComment: false,
      newComment: {},
      openPost: false,
      post: {},
      parent: {},
      comment: {},
      classList: classList,
      class: "101",
      history: []
    };
  }

  componentDidMount() {
    this.updateHistory()
  }

  updateHistory = () => {
    fetch(`http://localhost:7001/api/post/${this.state.class}`)
      .then((res) => {
        if (res.status !== 200) {
          console.log(res)
          return;
        }

        res.json().then((data) => {
          console.log("data", data)
          this.setState({
            history: data,
          })
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  toggleHeader = () => {
    this.setState({
      headerDropDown: !this.state.headerDropDown
    });
  };

  handleChangeClass = e => {
    console.log('change class', e.target.name, e.target.value);
    var newClass = classList.find(c => {return c.code === e.target.value});
    this.setState({
      class: newClass,
      history: classList.find(c => { return c.code === newClass.code}).history
    });
  };

  handleClick = i => {
    console.log(i);
    this.setState({
      index: i,
      openPost: false
    });
  };

  newComment = comment => {
    console.log('replying to ', comment);
    this.setState({
      parent: comment,
      openComment: true,
      openPost: false
    });
  };

  clearComment = () => {
    this.setState({
      comment: {},
      parent: {},
      openComment: false,
      openPost: false
    });
  };

  handleCommentChange = e => {
    var c = Object.assign({}, this.state.comment);
    c[e.target.name] = e.target.value;
    console.log('setting state to ', c);
    this.setState({
      comment: c
    });
  };

  submitNewComment = () => {
    console.log("parent", this.state.parent)

    var body = {
      id: this.state.parent._id,
      author: 'Anon',
      code: "101",
      content: this.state.comment.content
    }

    fetch("http://localhost:7001/api/post", {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(body),
    })
    .then((data) => {
      console.log('Request succeeded with JSON response', data);
      this.updateHistory()
    })
    .catch(function (error) {
      console.log('Request failed', error);
    });

  };

  newPost = () => {
    this.setState({
      openPost: true,
      openComment: false
    });
    //history.unshift(post)
  };

  clearPost = () => {
    this.setState({
      post: {},
      openPost: false
    });
  };

  handlePostChange = e => {
    var p = Object.assign({}, this.state.post);
    p[e.target.name] = e.target.value;
    console.log('setting state to ', p);
    this.setState({
      post: p
    });
  };

  submitNewPost = () => {
    var body = {
      author: 'Anon',
      code: "101",
      summary: this.state.post.summary,
      content: this.state.post.content,
    }

    console.log('submitting', body);
    fetch("http://localhost:7001/api/post", {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(body),
    })
    .then((data) => {
      console.log('Request succeeded with JSON response', data);
      this.updateHistory()
    })
    .catch(function (error) {
      console.log('Request failed', error);
    });

  };

  render() {
    return (
      <div className="App">
        <NavBar
          toggleHeader={this.toggleHeader}
          headerDropDown={this.state.headerDropDown}
          handleChange={this.handleChangeClass}
          class={this.state.class}
          classList={this.state.classList}
        />
        <div className="container-fluid">
          <div className="row " id="row">
            <History
              history={this.state.history}
              handleClick={this.handleClick}
              newPost={this.newPost}
              className={this.state.selected}
              index={this.state.index}
            />
            {this.state.openPost && (
              <Post
                handleChange={this.handlePostChange}
                clearPost={this.clearPost}
                submitNewPost={this.submitNewPost}
              />
            )}
            {!this.state.openPost && this.state.history.length > 0 && (
              <Thread
                head={this.state.history[this.state.index]}
                newComment={this.newComment}
                clearComment={this.clearComment}
                parent={this.state.parent}
                handleChange={this.handleCommentChange}
                submitNewComment={this.submitNewComment}
              />
            )}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
