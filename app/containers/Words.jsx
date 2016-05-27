import { connect } from 'react-redux';
import WordList from '../components/WordList'

const mapStateToProps = (state) => {
  return {
    words: state.words
  }
};
