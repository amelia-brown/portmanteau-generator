import { connect } from 'react-redux';
import Portmanteau from '../components/Portmanteau';
import { saveWords, setColors, resetWord } from '../actions/index';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

@connect(
  ({word, colors}) => ({word, colors}),
  dispatch => {
    return bindActionCreators({saveWords, setColors, resetWord}, dispatch);
  },
)

export default class PortmanteauShow extends Component {
  handleSave(word) {
    return this.props.saveWords(word);
  };
  resetColors(color1, color2) {
    return this.props.setColors(color1, color2);
  };
  handleReset() {
    return this.props.resetWord();
  };
  render() {
    return <Portmanteau
              word={this.props.word}
              colors={this.props.colors}
              handleSave={this.handleSave.bind(this)}
              resetColors={this.resetColors.bind(this)}
              handleReset={this.handleReset.bind(this)}
           />
  }
}

