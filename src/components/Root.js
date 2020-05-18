import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import { incrementCounter, resetCounter } from '../store/ducks/counter';

function Root({ incrementCounter, resetCounter, count }) {
  return (
    <>
      <h1>
        Tries #
        {JSON.stringify(count)}
      </h1>
      <ButtonGroup>
        <Button variant="contained" color="primary" onClick={() => { incrementCounter(1); }}>
          Try Me
        </Button>
        <Button variant="contained" color="default" onClick={() => { resetCounter(); }}>
          Reset
        </Button>
      </ButtonGroup>
    </>
  );
}

function mapState(state) {
  return {
    ...state.counter,
  };
}

const RootContainer = connect(
  mapState,
  { incrementCounter, resetCounter },
)(Root);

Root.propTypes = {
  count: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  resetCounter: PropTypes.func.isRequired,
};

export default RootContainer;
