import React, { PropTypes } from 'react';

const Word = ( {word} ) => (
  <li
    className="word-list-item">
    {word}
  </li>
)

Word.propTypes = {
  word: PropTypes.string.isRequired
}

export default Word
