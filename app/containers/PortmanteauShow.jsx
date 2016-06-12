import { connect } from 'react-redux';
import Portmanteau from '../components/Portmanteau';
import React, { Component } from 'react';

export default connect(
  ({word}) => ({word})
)(Portmanteau);

