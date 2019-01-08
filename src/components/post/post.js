import React from 'react';
import {
  testAction,
  handlePostChange,
  clearPost
} from '../../Redux/actions/postActions';
import { submitNewPost } from '../../Redux/actions/historyActions';
import { connect } from 'react-redux';

const Post = props => {
  return (
    <div className="col-md-6">
      <h1>New Post</h1>

      <label htmlFor="summary">Summary:</label>
      <input
        name="summary"
        type="text"
        className="form-control form-control-lg"
        onChange={e => props.handlePostChange(e)}
      />

      <label htmlFor="content">Content:</label>
      <textarea
        name="content"
        type="text"
        className="form-control form-control-lg"
        onChange={e => props.handlePostChange(e)}
      />

      <div className="btn-group-vertical">
        <input
          type="button"
          value="Clear"
          onClick={props.clearPost}
          className="btn btn-info btn-primary mt-4"
        />
        <input
          id="submitPost"
          type="submit"
          value="Submit"
          onClick={props.submitNewPost}
          className="btn btn-info btn-primary mt-4"
        />
      </div>

      {/* <button onClick={props.testAction}>Test Redux</button> */}
    </div>
  );
};

const mapStateToProps = state => ({
  post: state.post,
  history: state.history
});

const mapDispatchToProps = dispatch => {
  return {
    testAction: () => {
      return dispatch(testAction());
    },
    handlePostChange: e => {
      return dispatch(handlePostChange(e));
    },
    clearPost: () => {
      return dispatch(clearPost());
    },
    submitNewPost: post => {
      return dispatch(submitNewPost(post));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
