import { toggleSavedWords } from '../actions/index';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Words from '../components/Words';

// WordList needs an array of word objects to map over
// It also needs the current value of the app's visibility
// It needs to dispatch the action to toggle visibility

@connect( (state) => {
  return {
    showing: state.toggle.showing,
    words: state.words,
  }
}, (dispatch) => {
  return bindActionCreators({toggleSavedWords}, dispatch);
})

export default class WordList extends Component {
  handleToggle() {
    debugger;
    return this.props.toggleSavedWords();
  }

  render() {
    return (
      <Words words={this.props.words}
             showing={this.props.showing}
             handleToggle={this.handleToggle.bind(this)}
      />
    )
  }
};
