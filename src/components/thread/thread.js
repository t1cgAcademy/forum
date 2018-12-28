import React from 'react';
import Comment from '../comment/Comment';
import './thread.css';

const thread = (arr, props) => {
  return (
    <ul>
      {arr.map((comment, i) => {
        return (
          <li key={i}>
            <h4>{comment.name}</h4>
            <p>{comment.content}</p>
            {props.parent !== comment && (
              <button
                className="btn btn-link mt-4"
                onClick={() => props.newComment(comment)}
              >
                reply
              </button>
            )}
            {props.parent === comment && (
              <Comment
                handleChange={props.handleChange}
                clearComment={props.clearComment}
                submitNewComment={props.submitNewComment}
              />
            )}
            {thread(comment.replies, props)}
          </li>
        );
      })}
    </ul>
  );
};

const Thread = props => {
  return (
    <div className="col-md-7 col-sm-12 col-xs-12 ml-2 mt-2 ">
      <div className={'thread'}>
        <h1>{props.head.summary}</h1>
        <p>{props.head.content}</p>
        {props.parent !== props.head && (
          <button
            className="btn btn-link mt-4"
            onClick={() => props.newComment(props.head)}
          >
            reply
          </button>
        )}
        {props.parent === props.head && (
          <Comment
            handleChange={props.handleChange}
            clearComment={props.clearComment}
            submitNewComment={props.submitNewComment}
          />
        )}
        <div className={'comment'}>{thread(props.head.replies, props)}</div>
      </div>
    </div>
  );
};

export default Thread;
