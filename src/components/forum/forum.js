import React from 'react';
import './forum.css';

class Forum {
  constructor(history=[]) {
    this.index = 0
    this.history = history
  }

  setIndex(i) {
    console.log("set index", i)
    this.index = i
  }

  getIndex() {
    return this.index
  }

  display() {
    if (this.history.length === 0) {
      return (
        <div>
          Post
        </div>
      )
    }
    console.log("thread", this.history[this.getIndex()].thread())
    return (
      <div>
        {this.history[this.getIndex()].thread()}
      </div>
    )
  }

  post(post) {
    this.history.push(post)
  }

  summary() {
    return (
      <div className={'history'}>
        <ul className={'historyList'}>
          {
            this.history.map((post, i) => {
              console.log("SHIT ",post,i)
              return (
                <li className={'historyItem'} key={i}>
                  <button onClick={() => {this.setIndex(i)}}>
                    <h2>{post.getSummary()}</h2>
                    <p>{this.preview(post.content.split(" "))}</p>
                  </button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  preview(arr, str="", count=0) {
    if (arr.length === 0) {
      return str
    }
    if (count > 50) {
      return str + "..."
    }
    var w = arr.shift()
    return this.preview(arr, str+" "+w, count + w.length)
  }
}

class Thread {
  constructor(name) {
    this.date = new Date()
    this.name = name
    this.replies = []
  }

  getName() {
    return this.name
  }

  setName(name) {
    this.name = name
  }

  getReplies() {
    return this.replies
  }

  setReplies(comment) {
    this.replies.append(comment)
  }
}

class Comment extends Thread {
  constructor(name, content) {
    super(name)
    this.content = content
  }

  getContent() {
    return this.content
  }

  setContent(content) {
    this.content = content
  }

  thread() {
    return (
      <ul>
        {
          this.replies.map((comment, i) => {
            console.log("COMMENT THREAD", comment, i)
            return (
              <li key={i}>
                <h4>{comment.getName()}</h4>
                <p>{comment.getContent()}</p>
                <button onClick={() => this.reply(comment)}>reply</button>
                {comment.thread()}
              </li>
            )
          })
        }
      </ul>
    )
  }
}

class Post extends Thread {
  constructor(name, summary, content) {
    super(name)
    this.summary = summary
    this.content = content
  }

  getSummary() {
    return this.summary
  }

  setSummary(summary) {
    this.summary = summary
  }

  getContent() {
    return this.content
  }

  setContent(content) {
    this.content = content
  }

  thread() {
    return (
      <ul>
        {
          this.replies.map((comment, i) => {
            console.log("POST THREAD", comment, i)
            return (
              <li key={i}>
                <h4>{comment.getName()}</h4>
                <p>{comment.getContent()}</p>
                <button onClick={() => this.reply(comment)}>reply</button>
                {comment.thread()}
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export {Forum, Comment, Post}
