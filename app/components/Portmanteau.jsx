import React, { PropTypes } from 'react';

const Portmanteau = ({word}) => {
  if (!word.portmanteau) {
    console.log("null")
    return null;
  }

  return (
    <div>
      <div className='portmanteau'>
        <span>
          {word.w1} + {word.w2} = {word.portmanteau}
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
};

export default Portmanteau;
