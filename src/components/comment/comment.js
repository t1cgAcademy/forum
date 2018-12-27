import React from 'react';

const Comment = props => {
  return (
    <div>
      <div>
        <textarea name='content' onChange={props.handleChange}/>
      </div>

      <input type="button" value="Clear" onClick={props.clearComment} />
      <input type="submit" value="Submit" onClick={props.submitNewComment} />
    </div>
  )
}

export default Comment;
