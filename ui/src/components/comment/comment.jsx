import React from 'react';

const Comment = props => {
  return (
    <div>
      <div>
        <textarea
          name="content"
          type="text"
          className="form-control"
          onChange={props.handleChange}
        />
      </div>

      <input
        className="btn btn-info mt-4"
        type="button"
        value="Clear"
        onClick={props.clearComment}
      />
      <input
        type="submit"
        value="Submit"
        onClick={props.submitNewComment}
        className="btn btn-info mt-4 ml-2"
      />
    </div>
  );
};

export default Comment;
