import { connect } from 'react-redux';
import Form from '../components/Form';
import { combineWords, read } from '../actions/index';
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';

// @connect => syntax for decorator

@connect(

// Connect is a function that takes two functions as arguments
// First argument passes state and expects an object in return
  // ({}) passing no keys => ({}) to an empty object
  // equivalent to state => return{};
  // or ({words}) => ({words})
// The second argument is a function that connects the dispatch to the action creators
  ({}) => ({}),
    dispatch => {
      return bindActionCreators({combineWords, read}, dispatch);
    },
)

export default class WordForm extends Component {
  handleSubmit(w1, w2) {
    return this.props.combineWords(w1, w2);
  };
  getWord(word) {
    return this.props.read(word);
  };

  render() {
    return (
      <Form
        handleSubmit={this.handleSubmit.bind(this)}
        getWord={this.getWord.bind(this)}
      />
    )
  }
};
