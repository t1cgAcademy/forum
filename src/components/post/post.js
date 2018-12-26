import React from 'react';


const Post = props => {
  return (
    <div>
      <h2>Post Form</h2>
      <label>summary
        <input name='summary' onChange={props.handleChange}/>
      </label>

      <label>content
        <textarea name='content' onChange={props.handleChange}/>
      </label>

      <input type="button" value="Clear" onClick={props.clearPost} />
      <input type="submit" value="Submit" onClick={props.submitNewPost} />
    </div>
  )
}

export default Post;
