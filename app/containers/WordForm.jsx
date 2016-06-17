import { connect } from 'react-redux';
import Form from '../components/Form';
import { combineWords, read, setWord, setColors, resetWord } from '../actions/index';
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
  ({word, colors}) => ({word, colors}),
    dispatch => {
      return bindActionCreators({combineWords, read, setWord}, dispatch);
    },
)

export default class WordForm extends Component {
  handleSubmit(w1, w2) {
    return this.props.combineWords(w1, w2);
  };
  getWord(word) {
    return this.props.read(word);
  };
  onChange(sibling, word) {
    return this.props.setWord(sibling, word);
  };
  setColors(color1, color2) {
    return this.props.setColors(color1, color2);
  };


  render() {
    return (
      <Form
        word={this.props.word}
        colors={this.props.colors}
        onChange={this.onChange.bind(this)}
        handleSubmit={this.handleSubmit.bind(this)}
        getWord={this.getWord.bind(this)}
      />
    )
  }
};
