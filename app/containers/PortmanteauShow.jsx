import { connect } from 'react-redux';
import Portmanteau from '../components/Portmanteau';
import { saveWords } from '../actions/index';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

@connect(
  ({word, colors}) => ({word, colors}),
  dispatch => {
    return bindActionCreators({saveWords}, dispatch);
  },
)

export default class PortmanteauShow extends Component {
  handleSave(word) {
    return this.props.saveWords(word);
  }
  render() {
    return <Portmanteau
              word={this.props.word}
              colors={this.props.colors}
              handleSave={this.handleSave.bind(this)}
           />
  }
}

