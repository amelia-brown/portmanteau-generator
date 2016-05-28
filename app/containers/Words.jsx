import { connect } from 'react-redux';
import WordList from '../components/WordList'

const mapStateToProps = (state) => {
  return {
    words: state.words
  }
};

const Words = connect(
  mapStateToProps
)(WordList);

export default Words
