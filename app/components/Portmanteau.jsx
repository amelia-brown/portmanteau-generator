import React, { PropTypes } from 'react';

const Portmanteau = ({word, handleSave, colors}) => {
  if (!word.portmanteau) {
    return null;
  }

var colorsObj = {
  pink: {
    light: '#E91E63',
    dark: '#880E4F',
  },
  purple: {
    light: '#673AB7',
    dark: '#311B92',
  },
  blue: {
    light: '#2196F3',
    dark: '#0D47A1',
  },
  green: {
    light: '#BBC34A',
    dark: '#33691E',
  },
  yellow: {
    light: '#FFEB3B',
    dark: '#F57f17',
  },
  red: {
    light: '#F44336',
    dark: '#B71C1C',
  }
}
var colorOne = colors.color1;
var colorTwo = colors.color2;
var gradientLeft = colorsObj[colorOne].light;
var gradientRight = colorsObj[colorTwo].light;
var gradientLeftDark = colorsObj[colorOne].dark;
var gradientRightDark = colorsObj[colorTwo].dark;

  return (
    <div>
      <div className='portmanteau'
           style={{
            background: `linear-gradient(to right, ${gradientLeft}, ${gradientRight})`
           }}
      >
        <div
          className='portmanteau-after'
          style={{
            background: `linear-gradient(to right, ${gradientLeftDark}, ${gradientRightDark})`
          }}
        ></div>
        <div
          className='portmanteau-before'
          style={{
            background: gradientRightDark
          }}></div>
        <span>
          {word.portmanteau}
        </span>
        <button className='save'
                onClick={() => handleSave(word)}
        >
          <i className='material-icons star'>grade</i>
        </button>
      </div>
    </div>
  )
};

Portmanteau.propTypes = {
  word: PropTypes.object.isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default Portmanteau;
