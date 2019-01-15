import React from 'react';
import './thread.css';

const Thread = props => {
  return (
    <div className="col-md-7 col-sm-12 col-xs-12 ml-2 mt-3 ">
      <div className={'thread'}>
        <h1>{props.head.summary}</h1>
        <p>{props.head.content}</p>
      </div>
    </div>
  );
};

export default Thread;