import React from 'react';
import Comment from '../comment/comment';
import './thread.css';

const thread = (arr, props) => {
  return (
    <ul>
      {
        arr.map((comment, i) => {
          return (
            <li key={i}>
              <h4>{comment.name}</h4>
              <p>{comment.content}</p>
              {props.parent !== comment &&
                <button onClick={() => props.newComment(comment)}>reply</button>
              }
              {props.parent === comment &&
                <Comment handleChange={props.handleChange} clearComment={props.clearComment} submitNewComment={props.submitNewComment} />
              }
              {thread(comment.replies, props)}
            </li>
          )
        })
      }
    </ul>
  )
}

const Thread = props => {
  return (
    <div className={'thread'}>
      <h1>{props.head.summary}</h1>
      <p>{props.head.content}</p>
      {props.parent !== props.head &&
        <button onClick={() => props.newComment(props.head)}>reply</button>
      }
      {props.parent === props.head &&
        <Comment handleChange={props.handleChange} clearComment={props.clearComment} submitNewComment={props.submitNewComment} />
      }
      <div className={'comment'}>
        {thread(props.head.replies, props)}
      </div>
    </div>
  )
}

export default Thread;
