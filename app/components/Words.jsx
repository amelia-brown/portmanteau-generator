import React, { PropTypes } from 'react';
import Word from './Word';

const WordList = ({words}) => {
  <div className='modalContainer'>
    <div className='wordList'>
      <i className='material-icons'>close</i>
      <ul>
        {words.map(word =>
          <Word />
        )}
      </ul>
    </div>
  </div>
}

WordList.propTypes = {
  words = PropTypes.arrayOf(PropTypes.shape({
    word: PropTypes
  }).isRequired).isRequired,
}

export default WordList
