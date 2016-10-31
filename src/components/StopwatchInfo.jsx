import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import StopwatchLap from './StopwatchLap';
import StopwatchActionStart from './StopwatchActionStart';
import StopwatchActionStop from './StopwatchActionStop';
import FormatedTime from './FormatedTime';

import * as Actions from '../actions/actions';
import '../styles.css';

let interval = null;
let lapIndex = null;
let stopwatchIndex = null;

class StopwatchInfo extends Component {

  componentWillMount () {
    const stopwatchID = Number(this.props.params.stopwatchID);
    const {
      stopwatch,
      laps
    } = this.props;
    stopwatchIndex = stopwatch.items.findIndex((e) => e.id === stopwatchID);
    lapIndex = laps.items.findIndex((e) => e.id === stopwatchID);
  }

  stopwatchActions () {
    const {
      addStopwatchLap,
      setStopwatchBestTime,
      clearStopwatchLaps,
      stopwatchStop,
      stopwatchStart,
      setCurrentTime
    } = this.props.actions;

    const lapState = this.props.laps.items[lapIndex];

    if (lapState.isStart === true) {
      if (interval === null) {
        interval = setInterval(() => setCurrentTime({
          time: Date.now(),
          index: lapIndex
        }));
      }
      return (
        <StopwatchActionStart
          addStopwatchLap={addStopwatchLap}
          setStopwatchBestTime={setStopwatchBestTime}
          stopwatchStop={stopwatchStop}
          laptime={lapState.laptime}
          lapIndex={lapIndex}
          stopwatchIndex={stopwatchIndex}
          laps={lapState.laps}
        />
      );
    } else {
      if (interval !== null) {
        clearInterval(interval);
        interval = null;
      }
      return (
        <StopwatchActionStop
          setStopwatchBestTime={setStopwatchBestTime}
          clearStopwatchLaps={clearStopwatchLaps}
          stopwatchStart={stopwatchStart}
          lapIndex={lapIndex}
          stopwatchIndex={stopwatchIndex}
        />
      );
    }
  }

  goBackButton () {
    const stopwatchStop = this.props.actions.stopwatchStop;
    if (interval !== null) {
      clearInterval(interval);
      interval = null;
    }
    stopwatchStop({index: lapIndex});
  }

  render () {
    const setStopwatchBestTime = this.props.actions.setStopwatchBestTime;
    const stopwatch = this.props.stopwatch.items[stopwatchIndex];
    const laps = this.props.laps.items[lapIndex];

    return (
      <div>
        <div className="header">
          <div className="header-flex">
            <Link to="/" onClick={() => this.goBackButton()}>&lt; НАЗАД</Link>
            <span>СЕКУНДОМЕРЫ</span>
          </div>
        </div>
        <div className="laps-container">
          <div className="stopwatchInfo-title">{stopwatch.title}</div>
          <div className="counter">
            <FormatedTime time={laps.time - laps.currenttime}/>
          </div>
          <div>
            {this.stopwatchActions()}
          </div>
          <div className="laps">
            {laps.laps.map((lap, i) =>
              <StopwatchLap
                key={i}
                lapNumber={i + 1}
                lap={lap}
                timeline={90 * lap / laps.laps.reduce((p, v) => p > v ? p : v, lap)}
                bestTime={stopwatch.time}
                index={stopwatchIndex}
                setStopwatchBestTime={setStopwatchBestTime}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state, props) {
  return {
    laps: state.laps,
    stopwatch: state.stopwatch
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StopwatchInfo);
