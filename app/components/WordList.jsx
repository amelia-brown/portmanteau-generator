import React, { PropTypes } from 'react';
import Word from './Word';

const WordList = ( {words} ) => (
  <ul
    className="word-list">
    {words.map(word =>
              <Word
                {...word}
              />
    )}
  </ul>
)

WordList.propTypes = {
  words: PropTypes.array.isRequired,
  showing: PropTypes.bool.isRequired
}

export default WordList
