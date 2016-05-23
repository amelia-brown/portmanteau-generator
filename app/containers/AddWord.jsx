import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import styles from '../main.css';

@connect( (state) => {
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        <input ref={node => {
          input = node
        }} />
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Portmantize
          </button>
        </form>
    </div>
  )
})

word = connect()(word);

export default word
