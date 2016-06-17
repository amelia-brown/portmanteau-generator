import React, { PropTypes } from 'react';

const Form = ({ word, handleSubmit, getWord, colors }) => {
  let input1;
  let input2;
  return (
      <form onSubmit={e => {
        e.preventDefault()
      if (!input1.value.trim() || !input2.value.trim()) {
          return;
        };
        handleSubmit(input1.value, input2.value);
        input1.value = '';
        input2.value = '';
      }}>

      <div className='flexbox'>
        <div className={`${colors.color1} wordContainer`}
             id='wordOne'>
          <input
            value={word.w1}
            className='wordInput'
            ref={node => {
              input1 = node;
            }} />
            <button
              className='randomWord'
              onClick={() => {
                getWord('w1')
              }}
            >
              Random
            </button>
        </div>
        <button type='submit'
                className='submit'>
          <i className='material-icons md-36'>add</i>
        </button>
        <div className={`${colors.color2} wordContainer`}
             id='wordTwo'>
          <input
            value={word.w2}
            className='wordInput'
            ref={node => {
              input2 = node;
            }} />
         <button
           className='randomWord'
           onClick={() => {
             getWord('w2')
           }}
         >
           Random
         </button>
      </div>
    </div>
    </form>
  )
};

Form.propTypes = {
  word: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  getWord: PropTypes.func.isRequired,
};

export default Form;
