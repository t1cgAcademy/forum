import React from 'react';
import './history.css';

const preview = (arr, str="", count=0) => {
  if (arr.length === 0) {
    return str
  }
  if (count > 50) {
    return str + "..."
  }
  var w = arr.shift()
  return preview(arr, str+" "+w, count + w.length)
}

const History = props => {
  return (
    <div className={'history'}>
      <ul className={'historyList'}>
        {
          props.history.map((post, i) => {
            return (
              <li className={'historyItem'} key={i}>
                <button onClick={() => props.handleClick(i)}>
                  <h2>{post.summary}</h2>
                  <p>{preview(post.content.split(" "))}</p>
                  
                </button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default History;
