import React, { Component } from 'react';
import {Forum, Comment, Post} from './components/forum/forum';
import Header from './components/header/header';
// import History from './components/history/history';
// import Thread from './components/thread/thread';
import './App.css';

// COMMENT
// date: ,
// name: ,
// content: ,
// replies: ,

// POST
// date: ,
// name: ,
// summary: ,
// content: ,
// replies: ,


// const history = [
//   {
//     date: 0,
//     type: "post",
//     name: "Kruskal",
//     summary: "Final exam grades are posted",
//     content: "We've released the final exam grade on grades server. We will submit the grades to school system as soon as possible. If you have grading questions, email Prof. Kruskal.",
//     replies: [
//       {
//         date: 1,
//         type: "comment",
//         name: "Phil",
//         content: "What is the cutoff",
//         replies: [
//           {
//             date: 2,
//             type: "comment",
//             name: "Kruskal",
//             content: "Not posted yet",
//             replies: [],
//           }
//         ]
//       },
//       {
//         date: 15,
//         type: "comment",
//         name: "Anon",
//         content: "Are the letter grades on Elms our submitted grades?",
//         replies: [],
//       }
//     ],
//   },
//   {
//     date: 20,
//     type: "post",
//     name: "Anon",
//     summary: "How to see the final?",
//     content: "Is there any way I can get a copy of my final and see what I got wrong?",
//     replies: [
//       {
//         date: 22,
//         type: "comment",
//         name: "Kruskal",
//         content: "We can let you take a look at your final. Send me an email.",
//         replies: [],
//       }
//     ]
//   },
//   {
//     date: 100,
//     type: "post",
//     name: "Phil",
//     summary: "Is email a good method to get in contact with the professor?",
//     content: "I have some grading concerns I'd like to discuss, I just want to know the best way of getting in contact with the professor.",
//     replies: [
//       {
//         date: 101,
//         type: "comment",
//         name: "Bob",
//         content: "What is the cutoff",
//         replies: [
//           {
//             date: 102,
//             type: "comment",
//             name: "Bob",
//             content: "Blah, nm. ",
//             replies: [
//               {
//                 date: 169,
//                 type: "comment",
//                 name: "Bob",
//                 content: "Testing depth",
//                 replies: [
//                   {
//                     date: 696,
//                     type: "comment",
//                     name: "Bob",
//                     content: "still going ",
//                     replies: [],
//                   }
//                 ],
//               }
//             ],
//           },
//           {
//             date: 700,
//             type: "comment",
//             name: "Bob",
//             content: "what about here ",
//             replies: [],
//           }
//         ]
//       },
//       {
//         date: 105,
//         type: "comment",
//         name: "Kruskal",
//         content: "In some way, yes.",
//         replies: [],
//       }
//     ],
//   },
// ]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forum: new Forum([
        new Post("Anon","this is a summary","this is some test content whose length should be greater than 50 characters."),
        new Post("Anon", "another test summary", "wow woah wee wa")
      ]),
      openComment: false,
      openPost: false,
      post: {},
      comment: {},
     };
  }

  componentWillUpdate() {
    console.log("UPDATE", this.state.forum)
  }

  handleClick = i => {
    console.log(i)
    this.setState({
      index: i,
    })
  }

  newComment = comment => {
    console.log('replying to ', comment)
    this.setState({
      parent: comment,
      openComment: true,
      openPost: false,
    })
  }

  handleChange = e => {
    console.log(e.target.name, e.target.value)
    var spl = e.target.name.split("-")
    var type = spl[0]
    var name = spl[1]
    console.log(type, name)
    if (type === "post") {
      var p = Object.assign({}, this.state.post)
      p[name] = e.target.value
      console.log("setting state to ", p)
      this.setState({
        post: p,
      })
    }
    if (type === "comment") {
      var c = Object.assign({}, this.state.comment)
      c[name] = e.target.value
      console.log("setting state to ", c)
      this.setState({
        comment: c,
      })
    }
  }

  submitNewComment = () => {
    var c = new Comment("Anon", this.state.comment.content)
    this.state.parent.setReplies(c)
    console.log("FORUM AFTER COMMENT", this.state.forum)
  }

  newPost = () => {
    this.setState({
      openPost: true,
      openComment: false,
     })
  }

  submitNewPost = () => {
    console.log("POSTING")
    var p = new Post("Anon", this.state.post.summary, this.state.post.content)
    var f = Object.assign({}, this.state.forum.post(p))
    this.setState({
      forum: f
    })
  }

  render() {
    return (
      <div className="App">
        <Header newPost={this.newPost}/>
        <div className={'body'}>
          {this.state.openPost &&
            <div>
              <p>post form</p>
              <label>summary
                <input name='post-summary' onChange={this.handleChange}/>
              </label>

              <label>content
                <textarea name='post-content' onChange={this.handleChange}/>
              </label>

              <input type="submit" value="Submit" onClick={this.submitNewPost} />
            </div>
          }
          {this.state.openComment &&
            <div>
              <p>post comment</p>
              <label>content
                <textarea name='comment-content' onChange={this.handleChange}/>
              </label>

              <input type="submit" value="Submit" onClick={this.submitNewComment} />
            </div>
          }
          {this.state.forum &&
            this.state.forum.summary()
          }
          {this.state.forum &&
            this.state.forum.display()
          }
        </div>
      </div>
    );
  }
}

export default App;
