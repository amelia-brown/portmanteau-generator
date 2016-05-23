import React from 'react';

export default class Word extends Component {
  state = {
    data: []
  };

  var warmColors = [
    // Orange
    ["#F44336", "#B71C1C"],
    // Pink
    ["#E91E63", "#880E4F"],
    // Yellow
    ["#FFEB3B", "#F57F17"]
  ];
  var coolColors = [
    // Purple
    ["#673AB7", "#311B92"],
    // Blue
    ["#2196F3", "#0D47A1"],
    // Green
    ["#8BC34A", "#33691E"]
  ];

  componentWillMount() {
  }
  fetchData(word) {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5');
    xhttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
  }
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status === 200) {
      var newData = JSON.parse(xhttp.responseText).data;
      this.setState({data: newData})
    }
  }


}
