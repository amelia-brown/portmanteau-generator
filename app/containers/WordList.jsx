import Words from '../components/Words';
import toggleSavedWords from '../actions/index'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

@connect(
  ({words}) => ({words}),
    dispatch => {
      return bindActionCreators({toggleSavedWords}, dispatch);
    };
)
