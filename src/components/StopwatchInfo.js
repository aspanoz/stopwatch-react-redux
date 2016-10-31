import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import StopwatchLap from './StopwatchLap';
import FormatedTime from './FormatedTime';

import * as Actions from '../actions/actions';
import '../styles.css';

let interval = null;
let lapIndex = null;
let stopwatchIndex = null;

class StopwatchInfo extends Component {

  componentWillMount() {
    const stopwatchID = Number(this.props.params.stopwatchID);
    const {
      stopwatch,
      laps
    } = this.props;
    stopwatchIndex = stopwatch.items.findIndex((e) => e.id === stopwatchID)
    lapIndex = laps.items.findIndex((e) => e.id === stopwatchID)
  }

  addLap(lapTime) {
    const {
      addStopwatchLap,
      setStopwatchBestTime,
    } = this.props.actions;

    const currentTime = Date.now();
    const currentValue = currentTime - lapTime;
    const laps = this.props.laps.items[lapIndex];

    addStopwatchLap({
      time: currentTime,
      lap: currentValue,
      index: lapIndex
    });

    setStopwatchBestTime({
      index: stopwatchIndex,
      time: laps.laps.reduce((p,v) => p < v ? p : v, currentValue) 
    })
  }

  clearStoredLaps() {
    const {
      setStopwatchBestTime,
      clearStopwatchLaps
    } = this.props.actions;

    clearStopwatchLaps({
      index: lapIndex
    });

    setStopwatchBestTime({
      index: stopwatchIndex,
      time: 0
    })
  }

  stopwatchActions() {
    const {
      stopwatchStart,
      stopwatchStop,
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
        <div className="stopwatch-buttons">
          <button
            className="action-button green action-button-margin"
            onClick={() => this.addLap(lapState.laptime)}
          >
            КРУГ
          </button>
          <button
            className="action-button red action-button-margin"
            onClick={() => stopwatchStop({index: lapIndex})}
          >
            СТОП
          </button>
        </div>
      )
    }
    else {
      if (interval !== null) {
        clearInterval(interval);
        interval = null;
      }
      return (
        <div>
          <button
            className="action-button red action-button-margin"
            onClick={() => this.clearStoredLaps()}
          >
            СБРОС
          </button>
          <button
            className="action-button green action-button-margin"
            onClick={() => stopwatchStart({index: lapIndex})}
          >
            СТАРТ
          </button>
        </div>
      )
    }
  }

  render() {
    const {
      setStopwatchBestTime,
      stopwatchStop
    } = this.props.actions;
    const stopwatch = this.props.stopwatch.items[stopwatchIndex];
    const laps = this.props.laps.items[lapIndex];

    return (
      <div>
        <div className="header">
          <div className="header-flex">
            <Link to="/" onClick={() => {
              if (interval !== null) {
                clearInterval(interval);
                interval = null;
              }
              stopwatchStop({index: lapIndex})}
            }>&lt; НАЗАД</Link>
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
            {laps.laps.map((lap,i) => 
              <StopwatchLap
                key={i}
                lapNumber={i + 1}
                lap={lap}
                timeline={90 * lap / laps.laps.reduce((p,v) => p > v ? p : v, lap)}
                bestTime={stopwatch.time}
                index={stopwatchIndex}
                setStopwatchBestTime={setStopwatchBestTime}
              />  
            )}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    laps: state.laps,
    stopwatch: state.stopwatch
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StopwatchInfo);
