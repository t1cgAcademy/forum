import React from 'react';

const Post = props => {
  return (
    <div>
      Post
    </div>
  );
};

// const Post = props => {
//   return (
//     <div className="col-md-6">
//       <h1>New Post</h1>

//       <label htmlFor="summary">Summary:</label>
//       <input
//         name="summary"
//         type="text"
//         className="form-control form-control-lg"
//         onChange={props.handleChange}
//       />

//       <label htmlFor="content">Content:</label>
//       <textarea
//         name="content"
//         type="text"
//         className="form-control form-control-lg"
//         onChange={props.handleChange}
//       />

//       <div className="btn-group-vertical">
//         <input
//           type="button"
//           value="Clear"
//           onClick={props.clearPost}
//           className="btn btn-info btn-primary mt-4"
//         />
//         <input
//           id="submitPost"
//           type="submit"
//           value="Submit"
//           onClick={props.submitNewPost}
//           className="btn btn-info btn-primary mt-4"
//         />
//       </div>
//     </div>
//   );
// };

export default Post;
