import React from 'react'

function ProgressBar(props) {
    const progressPercentage = `${( props.questionNumber / props.listLength ) * 100}% complete`;
  return (
      <div>
          <p>{props.listLength}</p>
          <p>{progressPercentage}</p>
      </div>
  );
}

export default ProgressBar