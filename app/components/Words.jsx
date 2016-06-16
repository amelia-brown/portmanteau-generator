import React, { PropTypes } from 'react';
import Word from './Word';

const Words = ({words, handleToggle, showing, handleDelete}) => (
  <div className='modalContainer'>
    <i className='material-icons toggleModal'
       style={{
        display: showing ? 'none' : 'block'
       }}
       onClick={handleToggle}>
       list
    </i>
    <div
      className='wordList'
      style={{
        display: showing ? 'block' : 'none'
      }}
    >
      <i className='material-icons toggleModal'
         onClick={handleToggle}>
         close
      </i>
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
