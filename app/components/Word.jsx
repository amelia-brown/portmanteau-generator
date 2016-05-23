import React, { Component } from 'react';

export default class Word extends Component {
  state = {
    data: []
  };

  componentWillMount() {
  }

  fetchData(word) {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5');
    xhttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status === 200) {
        var newData = JSON.parse(xhttp.responseText).data;
        this.setState({data: newData})
      }
    }
  }
  render () {
    return (
      <form>
      <div className="flexbox">
        <div className="wordContainer" id="wordOne">
          <input className="wordInput"></input>
        </div>
        <div className="wordContainer" id="wordTwo">
          <input className="wordInput"></input>
        </div>
        </div>
        <button></button>
      </form>
    )
  }
}
