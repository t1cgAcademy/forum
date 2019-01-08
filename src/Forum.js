import React, { Component } from 'react';
import Post from './components/post/Post';
import History from './components/history/History';
import Thread from './components/thread/Thread';
import './App.css';
import classMap from './assets/data/data';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';

import { connect } from 'react-redux';

class Forum extends Component {
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
      classMap: classMap,
      history: classMap['101'].history
    };
  }

  // Done
  // toggleHeader = () => {
  //   this.setState({
  //     headerDropDown: !this.state.headerDropDown
  //   });
  // };

  handleChangeClass = e => {
    console.log('change class', e.target.name, e.target.value);
    var newClass = e.target.value;
    this.setState({
      class: newClass,
      history: classMap[newClass].history
    });
  };

  // Done
  // handleClick = i => {
  //   console.log(i);
  //   this.setState({
  //     index: i,
  //     openPost: false
  //   });
  // };

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

  // Done
  handleCommentChange = e => {
    var c = Object.assign({}, this.state.comment);
    c[e.target.name] = e.target.value;
    console.log('setting state to ', c);
    this.setState({
      comment: c
    });
  };

  submitNewComment = () => {
    var c = this.state.comment;
    c.date = new Date();
    c.name = 'Anon';
    c.replies = [];
    this.state.parent.replies.push(c);
    var h = this.state.history.slice();

    this.setState({
      history: h,
      openComment: false,
      comment: {},
      parent: {}
    });
  };

  // Done
  // newPost = () => {
  //   this.setState({
  //     openPost: true,
  //     openComment: false
  //   });
  //   //history.unshift(post)
  // };

  // Done
  // clearPost = () => {
  //   this.setState({
  //     post: {},
  //     openPost: false
  //   });
  // };

  // Done
  // handlePostChange = e => {
  //   var p = Object.assign({}, this.state.post);
  //   p[e.target.name] = e.target.value;
  //   console.log('setting state to ', p);
  //   this.setState({
  //     post: p
  //   });
  // };

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
    console.log('rendered');
    return (
      <div className="Forum">
        <NavBar />
        <div className="container-fluid">
          <div className="row " id="row">
            <History />
            {this.props.view.openPost === true && <Post />}
            {!this.props.view.openPost &&
              this.props.history.history.length > 0 && (
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

const mapStateToProps = state => ({
  classes: state.classes,
  comment: state.comment,
  history: state.history,
  post: state.post,
  view: state.view
});

export default connect(mapStateToProps)(Forum);
