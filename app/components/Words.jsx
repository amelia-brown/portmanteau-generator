import React, { PropTypes } from 'react';
import Word from './Word';

const Words = ({words, handleToggle, showing}) => (
  <div className='modalContainer'>
    <i className='material-icons'
       onClick={handleToggle}>
       list
    </i>
    <div
      className='wordList'
      style={{
        display: showing ? 'block' : 'none'
      }}
    >
      <i className='material-icons'
         onClick={handleToggle}>
         close
      </i>
      <ul>
        {words.map(word => (
               <li
                key={word.id}>
                {word.w1} + {word.w2} = {word.portmanteau} 
               </li>
        )
                  )}
      </ul>
    </div>
  </div>
)

Words.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  showing: PropTypes.bool.isRequired,
  words: PropTypes.arrayOf(PropTypes.shape({
    word: PropTypes.object.isRequired,
  }).isRequired).isRequired,
};

export default Words;
