import React, { PropTypes } from 'react';

const Portmanteau = ({word, handleSave}) => {
  if (!word.portmanteau) {
    return null;
  }

  return (
    <div>
      <div className='portmanteau'>
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
