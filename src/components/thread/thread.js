import React from 'react';
import './thread.css';

const thread = (arr, newComment) => {
  return (
    <ul>
      {
        arr.map((comment, i) => {
          return (
            <li key={i}>
              <h4>{comment.name}</h4>
              <p>{comment.content}</p>
              <button onClick={() => newComment(comment)}>reply</button>
              {thread(comment.replies, newComment)}
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
      <h1>{props.history[props.index].summary}</h1>
      <p>{props.history[props.index].content}</p>
      <button onClick={() => props.newComment(props.history[props.index])}>reply</button>
      <div className={'comment'}>
        {thread(props.history[props.index].replies, props.newComment)}
      </div>
    </div>
  )
}

export default Thread;
