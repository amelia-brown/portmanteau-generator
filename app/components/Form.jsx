import React, { PropTypes } from 'react';


const Form = ({ word, handleSubmit, getWord, onChange }) => {
  let input1;
  let input2;
  return (
      <form onSubmit={e => {
        e.preventDefault()
//      if (!input1.value.trim() || !input2.value.trim()) {
// Put API call here to get word from Wordnik if the user does not provide a word
        if (!input1.value.trim()) {
          return getWord('w1');
        };
        if (!input2.value.trim()) {
          return getWord('w2');
        };
        handleSubmit(input1.value, input2.value);
        input1.value = '';
        input2.value = '';
      }}>

      <div className='flexbox'>
        <div className='wordContainer' id='wordOne'>
          <input
            onChange={e => {
              onChange('w1', e.target.value)
            }}
            value={word.w1}
            className='wordInput'
            ref={node => {
              input1 = node;
            }} />
        </div>
        <button type='submit'>
          <i className='material-icons md-36'>add</i>
        </button>
        <div className='wordContainer' id='wordTwo'>
          <input
            onChange={e => {
              onChange('w2', e.target.value)
            }}
            value={word.w2}
            className='wordInput'
            ref={node => {
              input2 = node;
            }} />
        </div>
    </div>
    </form>
  )
};

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  word: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  getWord: PropTypes.func.isRequired
};

export default Form;
