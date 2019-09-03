import React from 'react';

export default function StartPage(props) {
  return (
    <div>
      <button className="go-inside-button" onClick={() => props.setIsStarted(true)}>Go inside</button>
    </div>
  )
}