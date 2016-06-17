import React, { PropTypes } from 'react';
import {colorsObj} from '../utils/colors';
import { colorsArray, selectColors } from '../utils/colors';

const Portmanteau = ({word, handleSave, colors, resetColors}) => {
  if (!word.portmanteau) {
    return null;
  }

// Hex codes for the colors in colorArray (dark and light tones) come from colorsObj
var [colorOne, colorTwo] = selectColors(colorsArray);
var gradientLeft = colorsObj[colors.color1];
var gradientRight = colorsObj[colors.color2];
var wordObject = {
  w1: word.w1,
  w2: word.w2,
  portmanteau: word.portmanteau,
  color1: colors.color1,
  color2: colors.color2
}
  return (
    <div>
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
          }}></div>
        <span>
          {word.portmanteau}
        </span>
        <button className='save'
                onClick={() => {
                  handleSave(wordObject);
                  resetColors(colorOne, colorTwo);
                }}
        >
          <i className='material-icons star'>grade</i>
        </button>
      </div>
    </div>
  )
};

Portmanteau.propTypes = {
  word: PropTypes.object.isRequired,
  resetColors: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default Portmanteau;
