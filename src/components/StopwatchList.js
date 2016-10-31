import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/actions';

import StopwatchAdd from './StopwatchAdd';
import Stopwatch from './Stopwatch';
import '../styles.css';

class StopwatchList extends Component {
  render() {
    const {
      delStopwatch,
      delStopwatchLaps,
      setStopwatchLaps,
      addStopwatch
    } = this.props.actions;
    const {stopwatch} = this.props;

    return (
      <div>
        <div className="header">СЕКУНДОМЕРЫ</div>
        <div className="stopwatchList">
          {stopwatch.items.map((item, i) => 
            <Stopwatch
              key={i}
              stopwatch={item}
              delStopwatch={delStopwatch}
              delStopwatchLaps={delStopwatchLaps}
            />  
          )}
        </div>
        <div className="footer">
          <StopwatchAdd
            addStopwatch={addStopwatch}
            setStopwatchLaps={setStopwatchLaps}
          />
        </div>
      </div>
    );
  }
};

function mapStateToProps(state, props) {
  return {
    stopwatch: state.stopwatch
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StopwatchList);
