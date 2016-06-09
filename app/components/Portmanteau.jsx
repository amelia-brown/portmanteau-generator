import React, { PropTypes } from 'react';

//create portmanteau div to display combined words
// hook it up to propTypes/state
// etc

const Portmanteau = (word) => (
  <div className="portmanteau">
    <span>
      {props.word.w1} + {props.word.w2} = {props.word.portmanteau}
    </span>
  </div>
)

Portmanteau.propTypes = {
  word: PropTypes.object.isRequired,
}
