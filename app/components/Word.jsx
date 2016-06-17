import React, { PropTypes } from 'react';
import {colorsObj} from '../utils/colors';

const Word = ({ word, onClick }) => {

  var gradientLeft = colorsObj[word.color1];
  var gradientRight = colorsObj[word.color2];
  return (
    <li>
      <div className='portmanteau'
           style={{
            background: `linear-gradient(to right, ${gradientLeft.light}, ${gradientRight.light})`
           }}
      >
        <div
          className='portmanteau-after'
          style={{
            background: `linear-gradient(to right, ${gradientLeft.dark}, ${gradientRight.dark})`
          }}
        ></div>
        <div
          className='portmanteau-before'
          style={{
            background: gradientRight.dark
          }}
        ></div>
        <span>
          {word.w1} + {word.w2} = {word.portmanteau}
        </span>
        <button className='delete'
                style={{
                  color: gradientRight.dark
                }}
          onClick={onClick}>
          delete
        </button>
      </div>
    </li>
  )
}

Word.propTypes = {
  word: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Word;
