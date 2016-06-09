import React, { PropTypes } from 'react';

const Form = ( { props } ) => (
    let input1;
    let input2;
    return (
      <div className = "main">
        <form onSubmit={e => {
          e.preventDefault()
          if (!input1.value.trim() || !input2.value.trim()) {
            return
          };
          props.combineWords(input1.value, input2.value);
          input1.value = '';
          input2.value = '';
        }}>
          <div className="flexbox">
            <div className="wordContainer" id="wordOne">
              <input
                className="wordInput"
                ref={node => {
                input1 = node;
              }} />
            </div>
          <div className = "wordContainer" id="wordTwo">
            <input
              className="wordInput"
              ref={node => {
              input2 = node;
            }} />
          </div>
        </div>
          <button
            className="submit"
            type="submit">
            Portmantize
          </button>
        </form>
      </div>
  )
)

Form.propTypes = {
  handleSumbit: PropTypes.func.isRequired,
}
