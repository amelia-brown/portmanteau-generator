import { connect } from 'react-redux'
import Form from '../components/Form'
import { combineWords } from '../actions'

// The Form component needs only the handleSubmit function as a prop
// handleSubmit dispatches combineWords to the store
// The Store is then updated with the values submitted, w1, w2 and portmanteau

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (w1, w2) => {
      dispatch(combineWords(w1, w2));
    }
  };
};

const WordForm = connect(
  state,
  mapDispatchToProps
)(Form)

export default WordForm;
