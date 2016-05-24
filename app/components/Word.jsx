import React, { Component } from 'react';
//import Portmanteau from '../containers/Portmanteau';

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
    var portmanteau = f + s;
    return this.setState({portmanteau: portmanteau});
    }

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
