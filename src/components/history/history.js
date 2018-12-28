import React from 'react';
import './history.css';

const preview = (arr, str = '', count = 0) => {
  if (arr.length === 0) {
    return str;
  }
  if (count > 50) {
    return str + '...';
  }
  var w = arr.shift();
  return preview(arr, str + ' ' + w, count + w.length);
};

// const preview = (arr) => {
//   var count = 0
//   var str = ""
//   while(count < 50 && arr.length > 0) {
//     var w = arr.shift()
//     str += " "+w
//     count += w.length
//   }
//   if (arr.length === 0) {
//     return str
//   }
//   return str + "..."
// }

const handleHighlight = (props, i) => {
  if (props === i) {
    return 'list-group-item historyItem bg-warning';
  } else return 'list-group-item historyItem';
};

const History = props => {
  return (
    <div className="col-md-4 ml-2 mt-2  col-sm-12 col-xs-12 border border-dark history">
      <button
        className="button btn-primary btn-block btn-lg mb-1"
        onClick={props.newPost}
      >
        New Post
      </button>

      <div className="card" style={{ cursor: 'pointer' }}>
        <ul className={'list-group list-group-flush historyList'}>
          {props.history.map((post, i) => {
            return (
              <li className={handleHighlight(props.index, i)} key={i}>
                <div onClick={() => props.handleClick(i)}>
                  <h2>{preview(post.summary.split(' '))}</h2>
                  <p>{preview(post.content.split(' '))}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default History;
