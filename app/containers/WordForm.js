import React from 'react';
import { connect } from 'react-redux';
import { comineWords } from '../actions/index';

let WordForm = ({ dispatch }) => {
  let input1;
  let input2;

  return (
    <div className = "main">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return;
        };

        dispatch(combineWords(input1.value, input2.value));
        input1value = '';
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
};


export default WordForm;
