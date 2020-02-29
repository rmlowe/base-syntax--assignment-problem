import React from 'react';

import './UserOutput.css';

const userOutput = props => {
  const style = {
    color: 'red'
  }

  return (
    <div className="UserOutput">
      <p>This is the first paragraph.</p>
      <p style={style}>This is the second paragraph, and the username is {props.username}.</p>
    </div>);
};

export default userOutput;