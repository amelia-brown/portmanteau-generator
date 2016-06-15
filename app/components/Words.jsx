import React, { PropTypes } from 'react';
import Word from './Word';

const Words = ({words, handleToggle, showing}) => (
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
        {words.map(word => (
               <li
                key={word.id}>
                <div className='portmanteau'>
                <span>
                  {word.w1} + {word.w2} = {word.portmanteau} 
                </span>
                </div>
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
