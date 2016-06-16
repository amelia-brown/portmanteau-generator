import React, { PropTypes } from 'react';

const Word = ({ word, handleDelete }) => (
  <li>
    <div className='portmanteau'
         style={{
          background: `linear-gradient(to right, ${word.color1, word.color2})`
         }}
    >
      <span>
        {word.w1} + {word.w2} = {word.portmanteau}
      </span>
      <button
        onClick={handleDelete(word.id)}
        className='material-icons'>
        close
      </button>
    </div>
  </li>
)

Word.propTypes = {
  word: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default Word;
