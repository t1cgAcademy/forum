import React from 'react';
import './header.css';

const Header = props => {
  return (
    <div className={'header'}>
      <h1>
        <button onClick={props.newPost}>New Post</button>
        header
      </h1>
    </div>
  )
}

export default Header;
