import React, { PropTypes } from 'react';


const Form = ({ handleSubmit }) => (
  let input1;
  let input2;
  return (
    <div className='main'>
      <form onSubmit={e => {
        e.preventDefault()
        if(!input1.value.trim() || !input2.value.trim()) {
// Put API call here to get word from Wordnik if the user does not provide a word
          return;
        };
        handleSubmit(input1.value, input2.value);
        input1.value '';
        input2.value '';
      }}>
      <div className='flexbox'>
        <div className='wordContainer' id='wordOne'>
          <input
            className='wordInput'
            ref={node => {
              input1 = node;
            }} />
        </div>
        <div className='wordContainer' id='wordTwo'>
          <input
            className='wordInput'
            ref={node => {
              input2 = node;
            }} />
        </div>
      </div>
      </form>
    </div>
  )
);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default Form
