import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/actions';

import StopwatchAdd from './StopwatchAdd';
import Stopwatch from './Stopwatch';
import styles from '../styles.css';

class StopwatchList extends Component {
  render () {
    const {
      deleteStopwatch,
      deleteStopwatchLaps,
      setStopwatchLaps,
      addStopwatch
    } = this.props.actions;
    const {stopwatch} = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.header}>СЕКУНДОМЕРЫ</div>
        <div className={styles.stopwatchList}>
          {stopwatch.items.map((item, i) =>
            <Stopwatch
              key={i}
              stopwatch={item}
              deleteStopwatch={deleteStopwatch}
              deleteStopwatchLaps={deleteStopwatchLaps}
            />
          )}
        </div>
        <div className={styles.footer}>
          <StopwatchAdd
            addStopwatch={addStopwatch}
            setStopwatchLaps={setStopwatchLaps}
            id={stopwatch.stopwatchId}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps (state, props) {
  return {
    stopwatch: state.stopwatch
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StopwatchList);
