import React, { Component } from 'react';
import { combine_words } from '../modules/word'

@connect( (state) => {}, (dispatch) => {
  return bindActionCreators({ combine_words }, dispatch)
})

export default class Word extends Component {
  state = {
    portmanteau: " "
  };

  componentWillMount() {
  }

  handleSubmit(e) {
    e.preventDefault();
    var f = this.refs.wordOne.value;
    var s = this.refs.wordTwo.value;
    return this.setState({combine});
    }
// https://jsfiddle.net/pxg9fkaj/5/

  render () {
    return (
      <div className="main">
      <form onSubmit={ ::this.handleSubmit }>
      <div className="flexbox">
        <div className="wordContainer" id="wordOne">
          <input
            className="wordInput"
            ref="wordOne">
          </input>
        </div>
        <div className="wordContainer" id="wordTwo">
          <input
            className="wordInput"
            ref="wordTwo">
          </input>
        </div>
      </div>
        <button className="submit">
        </button>
      </form>
      <div className="portmanteau">
        <span>{this.state.portmanteau}</span>
      </div>
      </div>


    )
  }
}
