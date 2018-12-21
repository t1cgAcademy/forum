import React from 'react';


const Post = props => {
  return (
    <div>
      post form
      <label>summary
        <input name='post-summary' onChange={this.handleChange}/>
      </label>

      <label>content
        <textarea name='post-content' onChange={this.handleChange}/>
      </label>

      <input type="submit" value="Submit" onClick={this.submitNewComment} />
    </div>
  )
}

export default Post;
