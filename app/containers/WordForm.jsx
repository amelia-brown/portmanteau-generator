import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form'
import { bindActionCreators } from 'redux';
import { combineWords } from '../actions/index';

const handleSubmit = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(combineWords())
    }
  }
}

const WordForm = connect(
  onClick
)(Form)


//export default connect(({word}) => ({word}),
//                      dispatch => bindActionCreators({combineWords},
//                                                    dispatch))(WordForm);
