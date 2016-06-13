import React, { PropTypes } from 'react';

const Word = ({ word }) => (
  <li>
    {word.w1} + {word.w2} = {word.portmanteau}
  </li>
)

Word.propTypes = {
  word: PropTypes.object.isRequired,
}

export default Word;
