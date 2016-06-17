import React, { PropTypes } from 'react';
import Word from './Word';

const Words = ({words, handleToggle, showing, handleDelete}) => (
  <div className='modalContainer'>
    <button className='toggleModal'
       style={{
        display: showing ? 'none' : 'block'
       }}
       onClick={handleToggle}>
       Saved words
       <i className='material-icons'>list</i>
    </button>
    <div
      className='wordList'
      style={{
        display: showing ? 'block' : 'none'
      }}
    >
    <button className='toggleModal'
            onClick={handleToggle}>
      <i className='material-icons'>
         close
      </i>
    </button>
      <ul>
        {words.map(word =>
                  <Word
                    key={word.id}
                    word={word}
                    // Passing the function like this
                    // instead of handleDelete={handleDelete(word.id)}
                    // prevents it from getting triggered at runtime
                    onClick={() => handleDelete(word.id)}
                  />
                )}
      </ul>
    </div>
  </div>
)

Words.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  showing: PropTypes.bool.isRequired,
  words: PropTypes.arrayOf(PropTypes.shape({
    word: PropTypes.object.isRequired,
  }).isRequired).isRequired,
};

export default Words;
