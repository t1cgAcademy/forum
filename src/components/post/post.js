import React from 'react';
import './post.css';

const Post = props => {
  return (
    <div>
      <h2>New Post</h2>
      <div className={'form'}>
        <label>Summary:</label>
        <input name='summary' onChange={props.handleChange}/>
      </div>

      <div className={'form'}>
        Content:
        <textarea name='content' onChange={props.handleChange}/>
      </div>

      <input type="button" value="Clear" onClick={props.clearPost} />
      <input type="submit" value="Submit" onClick={props.submitNewPost} />
    </div>
  )
}

export default Post;
